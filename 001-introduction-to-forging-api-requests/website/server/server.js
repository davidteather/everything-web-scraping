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

    await client.query(`SELECT * FROM profiles LIMIT ${PAGE_SIZE} OFFSET ${PAGE_SIZE * page}`, (err, result) => {
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

app.listen(process.env.PORT, () => {
    console.log(`Listening on port ${process.env.PORT}`);
    seedDatabase();
});