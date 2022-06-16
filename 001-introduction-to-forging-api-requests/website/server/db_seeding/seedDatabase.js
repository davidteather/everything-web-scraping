
const getClient = require('../get-client')

const initialData = require('./initial_data.json')

module.exports.seedDatabase = async () => {
    const client = await getClient.getClient()
    
    await client.query(`CREATE TABLE IF NOT EXISTS profiles (
        id serial PRIMARY KEY,
        job text NOT NULL,
        company text NOT NULL,
        username text NOT NULL UNIQUE,
        name text NOT NULL,
        email text NOT NULL,
        birthday timestamptz NOT NULL,
        profile_color text NOT NULL
    )`, (err, result) => {
        if (err) {
            console.log(err)
        } else {
            sql = "INSERT INTO profiles (job, company, username, name, email, profile_color, birthday)\nVALUES "
            var value_list = "";
            var time_list = [];
            for (let i = 0; i < initialData.profiles.length; i++) {
                cur = initialData.profiles[i]
                value_list = value_list + `('${cur.job}', '${cur.company}', '${cur.username}', '${cur.name}', '${cur.email}', '${cur.profile_color}', $${i+1})`

                time_list.push(cur.birthday)
                if (i != initialData.profiles.length - 1) {
                    value_list += ",\n"
                }
            }

            var full_sql = `${sql}${value_list}  ON CONFLICT DO NOTHING`

            client.query(full_sql, time_list, (err, result) => {
                if (err) {
                    console.log(err)
                } else {
                    console.log("Seeded profiles!")
                }
            })
        }
    })
    
    await client.query(`CREATE TABLE IF NOT EXISTS posts (
        id serial PRIMARY KEY,
        image_url text NOT NULL,
        image_unsplash_url text NOT NULL UNIQUE,
        likes_count int NOT NULL,
        caption text NOT NULL,
        author_username text NOT NULL
    )`, (err, result) => {
        if (err) {
            console.log(err)
        } else {
            sql = "INSERT INTO posts (image_url, image_unsplash_url, likes_count, caption, author_username)\nVALUES "
            var value_list = "";
            for (let i = 0; i < initialData.posts.length; i++) {
                cur = initialData.posts[i]
                value_list = value_list + `('${cur.image_url}', '${cur.image_unsplash_url}', ${cur.likes_count}, '${cur.caption}', '${cur.author_username}')`

                if (i != initialData.posts.length - 1) {
                    value_list += ",\n"
                }
            }

            var full_sql = `${sql}${value_list}  ON CONFLICT DO NOTHING`

            client.query(full_sql, (err, result) => {
                if (err) {
                    console.log(err)
                } else {
                    console.log("Seeded posts!")
                }
            })
        }
    })
}