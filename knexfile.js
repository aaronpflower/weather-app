module.exports = {
    development: {
        client: 'postgresql',
        connection: process.env.DATABASE_URL,
        migrations: {
            directory: __dirname + '/server/db/migrations'
        },
        seeds: {
            directory: __dirname + '/server/db/seeds'
        }
    },
    test: {
        client: 'postgresql',
        connection: process.env.DATABASE_URL_TEST,
        migrations: {
            directory: __dirname + '/server/db/migrations'
        },
        seeds: {
            directory: __dirname + '/server/db/seeds'
        }
    },
    production: {
        client: 'postgresql',
        connection: process.env.DATABASE_URL + '?ssl=true',
        migrations: {
            directory: __dirname + '/server/db/migrations'
        },
        seeds: {
            directory: __dirname + '/server/db/seeds'
        }
    }
};