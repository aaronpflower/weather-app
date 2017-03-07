const Controllers = require('../controllers/controllers')

module.exports = app => {
    app.post('/api/weather', Controllers.getCurrentWeather)
}