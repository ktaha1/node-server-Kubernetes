var express = require('express');
var app = express();
const port = 3001;

app
    .get('/', function (req, res) {
    res.send('Perfecto!! App is running ...');
    })
    .get('/home', function (req, res) {
        res.send('Home sweet home :)');
    })

app.listen(port, function () {
   console.log("App listening on %s", port);
})