[ ![Codeship Status for aaronpflower/weather-app](https://app.codeship.com/projects/a01b0ee0-92c8-0132-6084-66933f4492d6/status?branch=master)](https://app.codeship.com/projects/62002)

# Weather App React
>Goal, create an application using Node, PostgreSQL, React/Redux, webpack, and forecast.io for a user to save favorite locations and browser current weather and weater history

## Live App Demo
https://weather-application-react.herokuapp.com/

### Development
1. install yarn: https://yarnpkg.com/en/docs/install
2. run 'yarn install' to add project dependencies 
3. run 'npm start' to start local server
4. go to localhost:3001 
6. api routes are at localhost:3000/api/routename
7. start postgres

### Tests
1. `npm test`

### Production/Deployment to Heroku

1. `npm start`
3. commit changes
2. `git push`
4. `heroku run knex migrate:latest`
