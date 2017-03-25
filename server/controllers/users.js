// followed this example:
// http://mherman.org/blog/2016/10/28/token-based-authentication-with-node/#.WNbnRRIrKV4

const authHelpers = require('../auth/_helpers');

module.exports = {
    add: (req, res, next)  => {
        return authHelpers.createUser(req)
        .then((user) => { return localAuth.encodeToken(user[0]); })
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
    }
}
