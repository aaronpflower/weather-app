const bcrypt = require('bcryptjs');
const knex = require('../db/connection');

function comparePass(userPassword, databasePassword) {
    return bcrypt.compareSync(userPassword, databasePassword);
}

function createUser (req) {
    const salt = bcrypt.genSaltSync();
    const hash = bcrypt.hashSync(req.body.pass, salt);
    return knex('users')
    .insert({
        username: req.body.email,
        password: hash
    })
    .returning('*');
}

module.exports = {
    comparePass,
    createUser
};