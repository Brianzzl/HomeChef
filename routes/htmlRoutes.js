//var db = require("../models");
var path = require("path");
var isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function(app) {
	// Load index page
	app.get("/", function(req, res) {
		/*db.Example.findAll({}).then(function(dbExamples) {
			res.render("food", {
				msg: "Welcome!",
				examples: dbExamples
		
			});*/
		if(req.user)
		{	
			if (req.user.userType === "Customers") {
				res.redirect("/customers");
			}
	    else if (req.user.userType === "Chefs"){
				res.redirect("/chefs");
			}
		} 
		else{	
			res.sendFile(path.join(__dirname, "../views/food.html"));	
		//});
		}
	});

	
  	// app.get("/example/:id", function(req, res) {
	// 	db.Example.findOne({ where: { id: req.params.id } }).then(function(dbExample) {
	// 		res.render("example", {
	// 			example: dbExample
	// 		});
	// 	});
  	// });

  	// Render 404 page for any unmatched routes
  	// app.get("*", function(req, res) {
	// 	res.render("404");
  	// });
	 
	// Load Login Page 
	app.get("/login", function(req, res) {
		// If the user already has an account send them to the members page
		console.log(req.user);
		if(req.user){
			if (req.user.userType === "Customers") {
		  res.redirect("/customers");
			}
			else if (req.user.userType === "Chefs"){
		  res.redirect("/chefs");
			}
		}
		else{
		  res.sendFile(path.join(__dirname, "../views/login.html"));
		}
	  }); 	  

	// Load Chef SignUp Pages
	
	app.get("/chefsignup",function(req,res){
		res.sendFile(path.join(__dirname, "../views/chefSignUp.html"));			
	});

	// Load Customer Signup Pages
	app.get("/customersignup",function(req,res){
		res.sendFile(path.join(__dirname, "../views/cusSignUp.html"));			
	});
	 app.get("/chefs",isAuthenticated, function(req,res){ //This looks like it's a duplication of the html path below. I wrote the custPage.html file, and I think that's the one we're going to use - EJ
	 	res.sendFile(path.join(__dirname, "../views/chefPage.html"));
	 });
	app.get("/customers",isAuthenticated, function(req,res){
		res.sendFile(path.join(__dirname, "../views/custPage.html"));
	});
	app.get("/chefs",isAuthenticated, function(req,res){
		res.sendFile(path.join(__dirname, "../views/chefPage.html"));
	});
};
