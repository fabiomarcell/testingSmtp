//npm install express
var express = require('express');
//instancia
var app = express();
//var bodyParser = require('body-parser');

//app.use(bodyParser.json());
//app.use(bodyParser.urlencoded({ extended: true }));



require("./routes.js")(app);

var server = app.listen(8000, function () {
   console.log("Example app listening at 8000");
});