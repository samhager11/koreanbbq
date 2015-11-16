var express     = require('express'),
    app         = express(),
    port        = process.env.PORT || 3000,
    logger      = require('morgan'),
    bodyParser  = require('body-parser'),
	     mongoose	= require('mongoose'),
    ejsLayouts  = require('express-ejs-layouts')

// app configurations
app.set('view engine', 'ejs')

// middleware
app.use(ejsLayouts)

//establish connection to mongo database
mongoose.connect('mongodb://localhost/koreanBBQdb')


//track requests made to the app
app.use(logger('dev'))

//makes json object available in requests
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended : false}))


app.listen(port, function() {
  console.log('Application server started successfully on port: ' + port)
})
