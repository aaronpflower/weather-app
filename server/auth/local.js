const moment = require('moment');
const jwt = require('jsonwebtoken');

function encodeToken(user) {
	const playload = {
		exp: moment().add(14, 'days').unix(),
		iat: moment().unix(),
		data: user.id
	};
	// TODO: create a more secure TOKEN_SECRET
	return jwt.sign(playload, process.env.TOKEN_SECRET);
}

function decodeToken(token, callback) {
	return jwt.verify(token, process.env.TOKEN_SECRET, (err, decoded) => {
		if (err) {
			return callback('Token Has expired.')
		}
		return callback(null, decoded)
	});
	// const now = moment().unix();
	// // check if the token has expired
	// if (now > payload.exp) callback('Token has expired.');
	// else callback(null, payload);
}

module.exports = {
	encodeToken,
	decodeToken
};