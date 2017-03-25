const moment = require('moment');
// TODO: Switch to https://github.com/auth0/node-jsonwebtoken later
const jwt = require('jwt-simple');

function encodeToken(user) {
  const playload = {
    exp: moment().add(14, 'days').unix(),
    iat: moment().unix(),
    sub: user.id
  };
  return jwt.encode(playload, process.env.TOKEN_SECRET);
}

module.exports = {
  encodeToken
};