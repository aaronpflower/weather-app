const WeatherController = require('../controllers/weather')
const UserController = require('../controllers/users')

module.exports = app => {

    app.post('/api/weather', WeatherController.getCurrentWeather);

    app.post('/api/users/add', UserController.add);

    app.post('/api/users/login', UserController.login);

}
