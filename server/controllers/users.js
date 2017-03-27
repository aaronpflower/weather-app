// followed this example:
// http://mherman.org/blog/2016/10/28/token-based-authentication-with-node/#.WNbnRRIrKV4

const authHelpers = require('../auth/_helpers');
const localAuth = require('../auth/local');

module.exports = {
    add: (req, res, next)  => {
        return authHelpers.createUser(req)
        .then((user) => {
            return localAuth.encodeToken(user[0]);
        })
        .then((token) => {
            res.status(200).json({
                status: 'success',
                token: token
            });
        })
        .catch((err) => {
            res.status(500).json({
                status: 'error'
            });
        });
    },

    login: (req, res, next) => {
        const username = req.body.username;
        const password = req.body.password;
        return authHelpers.getUser(username)
            .then((response) => {
                authHelpers.comparePass(password, response.password);
                return response;
            })
            .then((response) => { return localAuth.encodeToken(response); })
            .then((token) => {
                res.status(200).json({
                    status: 'success',
                    token: token
                });
            })
            .catch((err) => {
                res.status(500).json({
                    status: 'error'
                });
            });
    },

    currentUser: (req, res, next) => {
        // http://mherman.org/blog/2017/01/05/token-based-authentication-with-angular/#.WNchJxIrJTY
        if (!(req.headers && req.headers.authorization)) {
            console.log('here')
            return res.status(400).json({
                status: 'Please log in'
            });
        }
        // decode the token
        const header = req.headers.authorization.split(' ');
        const token = header[1];
        localAuth.decodeToken(token, (err, payload) => {
            if (err) {
                return res.status(401).json({
                    status: 'Token has expired'
                });
            } else {
                return knex('users').where({id: parseInt(payload.sub)}).first()
                .then((user) => {
                    next();
                })
                .catch((err) => {
                    res.status(500).json({
                    status: 'error'
                    });
                });
            }
        });
    }
}
