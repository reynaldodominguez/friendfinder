//Require express package
var express = require("express");

//Create express server
var app = express();

//Assign the port for the server
var PORT = process.env.PORT || 8080;

//Express set up
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Require the files for the Routes
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

//Start the server
app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
  });