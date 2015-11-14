var express = require('express'),
    app = express(),
    port = process.env.PORT || 3000,
	mongoose	= require('mongoose');

//establish connection to mongo database
mongoose.connect('mongodb://localhost/koreanBBQdb')

app.listen(port, function() {
  console.log('Application server started successfully on port: ' + port)
})
