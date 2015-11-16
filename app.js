var express     = require('express'),
    app         = express(),
    port        = process.env.PORT || 3000,
    logger      = require('morgan'),
    bodyParser  = require('body-parser'),
	     mongoose	= require('mongoose'),

//establish connection to mongo database
mongoose.connect('mongodb://localhost/koreanBBQdb')


//track requests made to the app
app.use(logger('dev'))

//makes json object available in requests
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended : false}))

// set routes
app.get('/menu', function(req, res) {
  var data = {
    title: 'Menu',
    message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  };
  res.render('menu', data);
});

app.get('/about', function(req, res) {
  var data = {
    title: 'About',
    message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  };
  res.render('about', data);
});

app.listen(port, function() {
  console.log('Application server started successfully on port: ' + port)
})
