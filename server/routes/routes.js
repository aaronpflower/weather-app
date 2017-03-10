const db = require('../db');
const Controllers = require('../controllers/controllers')

module.exports = app => {
    app.post('/api/weather', Controllers.getCurrentWeather)

    app.get('/api/users/create', db.users.create);

    app.get('/api/users/init', db.users.init);

    // app.get('/api/users/add/:name', req => db.users.add(req.params.name));
    app.post('/api/users/add', (req, res) => {
        db.users.add(req, res)
    });

    app.get('/api/users/find/:id', req => db.users.find(+req.params.id));

    // remove a user by id:
    app.get('/api/users/remove/:id', req => db.users.remove(+req.params.id));

    // app.get all users:
    app.get('/api/users/all', db.users.all);

    // count all users:
    app.get('/api/users/total', db.users.total);
}