// const request = require('request');
// const url = 'http://api.weatherstack.com/current?access_key=3e02d676331cff743661530c7c75abb2&query=20.5937,78.9629';

// request({
//   url: url, json: true
// }, (error, response) => {
//   console.log(response.body.current.weather_descriptions[0] + ". It is currently " + response.body.current.temperature + " degress out.");
// });
// // console.log('starting');
// // setTimeout(() => {
// //   console.log('2 sec timer');
// // },2000);
// // setTimeout(() => {
// //   console.log('0 sec timer');
// // },0);
// // console.log('stopping');

const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');

const address = process.argv[2];

if (!address) {
  console.log('Please provide an address');
} else {
  geocode(address, (error, data) => {
    if (error) {
      return console.log(error);
    }

    forecast(data.latitude, data.longitude, (error, forecastData) => {
      if (error) {
        return console.log(error);
      }

      console.log(data.location);
      console.log(forecastData);
    });
  });
}
