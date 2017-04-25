const WeatherController = require('../controllers/weather')
const UserController = require('../controllers/users')

module.exports = app => {
    app.get('/', function(req, res) {
	    res.sendFile(__dirname + '/dist/index.html')    
    });

    app.post('/api/weather', WeatherController.getCurrentWeather);

    app.get('/api/user', UserController.currentUser);

    app.post('/api/users/add', UserController.add);

    app.post('/api/users/login', UserController.login);

}
