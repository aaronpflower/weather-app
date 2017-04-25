const moment = require('moment');
const jwt = require('jsonwebtoken');

function encodeToken(user) {
	const playload = {
		exp: moment().add(1, 'second').unix(),
		iat: moment().unix(),
		data: user.id
	};
	// TODO: create a more secure TOKEN_SECRET
	return jwt.sign(playload, process.env.TOKEN_SECRET);
}

function decodeToken(token, callback) {
	const payload = jwt.verify(token, process.env.TOKEN_SECRET);
	const now = moment().unix();
	// check if the token has expired
	if (now > payload.exp) callback('Token has expired.');
	else callback(null, payload);
}

module.exports = {
	encodeToken,
	decodeToken
};