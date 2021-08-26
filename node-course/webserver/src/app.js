const path = require ('path');
const express = require ('express');
const hbs = require ('hbs');
//const geocode = require('./utils/geocode.js');
//const forecast = require('./utils/forecast.js');

const app = express();//express app location
app.use(express.static(path.join(__dirname,'../public')));//Setting up static directory to serve
const viewsPath = path.join('__dirname','../templates/views');//Define path for express config
const partialsPath = path.join('__dirname','../templates/partials');

//setup handlebars and location for views
app.set('view engine','hbs');
app.set('views',viewsPath);//Customising views
hbs.registerPartials(partialsPath);

app.get('',(req,res) => {
  res.render('index',{
    title: 'Weather-app',
    name: 'Soumya'
  });
});
app.get('/products',(req,res) => {
  if(!req.query.search){
    res.send({
      error: 'You must provide a search term'
    });
  }
  console.log(req.query.search);
  res.send({
    products:[]
  });
});
app.get('/about',(req,res) => {
  res.render('about',{
    title: 'About flower',
    name: 'Soumya'
  });
});
app.get('/about/*',(req,res) => {
  res.send('About article not found');
});

app.get('/weather', (req, res) => {
  if (!req.query.address) {
    res.send({
      error: 'You must provide an address!'
    });
  } else {
    res.send({
      forecast : 'there is 0 percent of Precipitation',
      lacation: 'India',
      address:req.query.address
    });
  }
});
// geocode(req.query.address, (error, { latitude, longitude, location } = {
// }) => {
//   if (error) {
//     return res.send({
//       error
//     });
//   }

// // eslint-disable-next-line no-shadow
// forecast(latitude, longitude, (error, forecastData) => {
//   if (error) {
//     return res.send({
//       error
//     });
//   }
//   res.send({
//     forecast: forecastData,
//     location,
//     address: req.query.address
//   });
// });
//   });
// });


app.get('*',(req,res) => {
  res.send('My 404 page');
});

console.log(__dirname);
console.log(path.join(__dirname,'../public'));
app.get('',(req,res) => {
  res.send('<h1>Weather</h1>');
});
// app.get('/help',(req,res) => {
//   res.send({
//     name :'Soumya',
//     last_name:'wali'
//   });
// });
// //trying to send json in which wes end an array or obj
// app.get('/about',(req,res) => {
//   res.send('About page');
// });

app.listen(3000,() => {
  console.log('server is up on port 3000!');
});