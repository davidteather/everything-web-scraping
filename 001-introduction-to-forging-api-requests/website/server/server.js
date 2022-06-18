const express = require("express");
const { seedDatabase } = require("./db_seeding/seedDatabase");
const app = express();
const getClient = require("./get-client")

const PAGE_SIZE = 10

// Allow cors
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get('/', (req, res) => {
    res.send("Test")
})

app.get('/discover/profiles/:page', async (req, res) => {
    let page = req.params.page
    const client = await getClient.getClient()

    await client.query(
        {
            text: `SELECT * FROM profiles LIMIT $1 OFFSET $2`,
            values: [PAGE_SIZE, PAGE_SIZE * page]
        }, (err, result) => {
        if (err) {
            console.log(err)
            res.sendStatus(500)
            client.end()
        } else {
            res.json({ profiles: result.rows })
            client.end()
        }
    })
})

app.get('/feed/:page', async (req, res) => {
    let page = req.params.page
    const client = await getClient.getClient()

    await client.query(
        {
            text: "SELECT * FROM posts ORDER BY likes_count DESC LIMIT $1 OFFSET $2",
            values: [PAGE_SIZE, PAGE_SIZE * page]
        }, (err, result) => {
        if (err) {
            console.log(err)
            res.sendStatus(500)
            client.end()
        } else {
            res.json({ posts: result.rows })
            client.end()
        }
    })
})

app.get('/profile/:username/feed/:page', async (req, res) => {
    let page = req.params.page
    let username = req.params.username
    const client = await getClient.getClient()

    await client.query({
        text: "SELECT * FROM profiles WHERE username=$1",
        values: [username]
    }, async (err, result) => {
        if (err) {
            console.log(err)
            res.sendStatus(500)
            client.end()
        } else {
            if (result.rowCount == 0) {
                // User doesn't exist
                res.json({ posts: [], error: "USER_DOES_NOT_EXIST"})
                client.end()
            } else {
                await client.query(
                    {
                        text: "SELECT * FROM posts WHERE author_username=$1 ORDER BY likes_count DESC LIMIT $2 OFFSET $3",
                        values: [username, PAGE_SIZE, PAGE_SIZE * page]
                    }, (err, result) => {
                    if (err) {
                        console.log(err)
                        res.sendStatus(500)
                        client.end()
                    } else {
                        res.json({ posts: result.rows })
                        client.end()
                    }
                })
            }
        }
    })
    
})

app.listen(process.env.PORT, () => {
    console.log(`Listening on port ${process.env.PORT}`);
    seedDatabase();
});