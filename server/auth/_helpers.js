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

function ensureAuthenticated(req, res) {
	console.log('here')
	if (!(req.headers && req.headers.authorization)) {
		return res.status(400).json({
			status: 'Please log in'
		});
	}
	const header = req.headers.authorization.split(' ');
	const token = header[1];
	localAuth.decodeToken(token, (err, payload) => {
		if (err) {
			return res.status(401).json({
				status: 'Token has expired'
			});
		} else {
			return knex('users').where({id: parseInt(payload.data)}).first()
			.then((user) => {
				res.status(200).json({
					status: 'success',
					username: user.username
				});
			})
			.catch((err) => {
				res.status(500).json({
					status: 'error'
				});
			});
		}
	});
}

function invalidateToken(req, res) {
	if (!(req.headers && req.headers.authorization)) {
		return res.status(400).json({
			status: 'No token'
		});
	}
	const header = req.headers.authorization.split(' ');
	const token = header[1];
	localAuth.decodeToken(token, (err, payload) => {
	if (err) {
			return res.status(200).json({
				status: 'no token'
			});
		} else {
			return knex('users').where({id: parseInt(payload.data)}).first()
			.then((user) => {
				res.status(200).json({
					status: 'success'
				});
			})
			.catch((err) => {
				res.status(500).json({
					status: 'error'
				});
			});
		}
	});
}

module.exports = {
	createUser,
	getUser,
	comparePass,
	ensureAuthenticated,
	invalidateToken
};
