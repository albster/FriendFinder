
// Pull in required dependencies
// var express = require("express");
// var app = express();
var path = require("path");

// Export HTML routes
module.exports = function(app) {
// console.log('___ENTER htmlRoutes___');

	// Home page
	app.get("/", function(req, res) {
		res.sendFile(path.join(__dirname, '../public/home.html'));
	});

	// Survey page
	app.get("/survey", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/survey.html"));
   });
};