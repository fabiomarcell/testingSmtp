//npm install express
var express = require('express');

var app = express();
//npm install body-parser
//var bodyParser = require('body-parser');

//app.use(bodyParser.json());
//app.use(bodyParser.urlencoded({ extended: true }));



require("./routes.js")(app);

var server = app.listen(8000, function () {
   console.log("Example app listening at 8000");
});