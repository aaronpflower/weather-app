const WeatherController = require('../controllers/weather')
const UserController = require('../controllers/users')

module.exports = app => {

    app.get('/api/users/current', (req, res) => {
        if (req.user) {
            console.log('logged in', req.user)
        } else {
            // console.log(req)
            console.log('not logged in')
        }
    })
    app.post('/api/weather', WeatherController.getCurrentWeather);

    app.post('/api/users/add', UserController.add);

    app.post('/api/users/login', UserController.login);

}
