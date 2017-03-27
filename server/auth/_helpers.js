const bcrypt = require('bcryptjs');
const knex = require('../db/connection');
const localAuth = require('./local');

function createUser(req) {
	const salt = bcrypt.genSaltSync();
	const hash = bcrypt.hashSync(req.body.password, salt);
	return knex('users')
	.insert({
		username: req.body.username,
		password: hash
	})
	.returning('*');
}

function getUser(username) {
	return knex('users').where({username}).first();
}

function comparePass(userPassword, databasePassword) {
	return bcrypt.compareSync(userPassword, databasePassword);
}

module.exports = {
	createUser,
	getUser,
	comparePass
};
