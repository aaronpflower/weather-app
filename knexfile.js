const databaseName = 'weatherapp';

module.exports = {
    development: {
        client: 'postgresql',
        connection: `postgres://localhost:5432/${databaseName}`,
        migrations: {
            directory: __dirname + '/server/db/migrations'
        },
        seeds: {
            directory: __dirname + '/server/db/seeds'
        }
    },
    test: {
        client: 'postgresql',
        connection: `postgres://localhost:5432/${databaseName}_test`,
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
