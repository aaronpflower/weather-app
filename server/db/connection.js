const environment = process.env.NODE_ENV;
const config = require('../../knexfile.js')[environment];
console.log(config)
module.exports = require('knex')(config);