// followed this example:
// http://mherman.org/blog/2016/09/25/node-passport-and-postgres/#.WNP_pxIrKV4

const authHelpers = require('../auth/_helpers');
const passport = require('../auth/local');

function handleResponse(res, code, statusMsg) {
    res.status(code).json({status: statusMsg});
}

module.exports = {
    add: (req, res, next) => {
        authHelpers.createUser(req, res)
        .then((response) => {
            passport.authenticate('local', (err, user, info) => {
                if(user) { handleResponse(res, 200, 'success');  }
            })(req, res, next);
        })
        .catch((err) => { handleResponse(res, 500, 'error'); });
    },

    login: (req, res, next) => {
        passport.authenticate('local', (err, user, info) => {
            if (err) { handleResponse(res, 500, 'error'); }
            if (!user) { handleResponse(res, 404, 'User not found'); }
            if (user) {
                req.logIn(user, function (err) {
                    if (err) { handleResponse(res, 500, 'error'); }
                    res.send(user.username)
                    // handleResponse(res, 200, 'success');
                });
            }
        })(req, res, next);
    }
}
