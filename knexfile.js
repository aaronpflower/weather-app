require("dotenv").config();
// todo: 1 figure out how to run mocha tests on staging env?
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
        connection: process.env.DATABASE_URL_TEST || 'postgres://localhost:5432/test',
        migrations: {
            directory: __dirname + '/server/db/migrations'
        },
        seeds: {
            directory: __dirname + '/server/db/seeds'
        }
    },

	staging: {
		client: 'postgresql',
		connection: process.env.DATABASE_URL + '?ssl=true',
		pool: {
			min: 2,
			max: 10
		},
		migrations: {
			tableName: 'knex_migrations'
		}
	},

	production: {
		client: 'postgresql',
		connection: process.env.DATABASE_URL + '?ssl=true',
		pool: {
			min: 2,
			max: 10
		},
		migrations: {
			tableName: 'knex_migrations'
		}
	}

};

// connection: {
		// 	database: 'my_db',
		// 	user:     'username',
		// 	password: 'password'
		// },

