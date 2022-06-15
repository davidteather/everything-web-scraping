const { Client } = require('pg');

const MAX_RETRIES = 30;

const delay = ms => new Promise(resolve => setTimeout(resolve, ms))

module.exports.getClient = async () => {
    let tries = 0

    var client = null

    var connected = false
    while (tries < MAX_RETRIES) {
        try {
            console.log("Trying to connect to db")
            client = new Client({
                connectionString: `postgres://${process.env.POSTGRES_USER}:${process.env.POSTGRES_PASSWORD}@${process.env.POSTGRES_HOST}:${process.env.POSTGRES_PORT}/${process.env.POSTGRES_DB}`
            });
            await client.connect()
            connected = true
            console.log("Connected to database!")
        } catch (e) {
            await delay(1000) // Wait 1 second to retry
        }
        tries++

        if (connected)
            break
    }

    if (connected == null) {
        console.log("Could not connect to database, try running \"docker-compose up\" again.")
    }

    return client;
};