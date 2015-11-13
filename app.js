var express = require('express'),
    app = express(),
    port = process.env.PORT || 3000;

app.listen(port, function() {
  console.log('Application server started successfully on port: ' + port)
})
