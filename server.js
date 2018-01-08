var express = require('express');

//Creat app
var app = express();

//define port
var port = 8008;

//adding functionality to the express application
app.use(express.static('public'));

app.listen(port, function ()
{
    console.log('Express server is running on port:' + port);
});
