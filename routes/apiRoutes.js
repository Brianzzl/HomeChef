var db = require("../models");
var passport = require("../config/passport");

module.exports = function(app) {
	// Get all examples
	app.get("/api/examples", function(req, res) {
		db.Example.findAll({}).then(function(dbExamples) {
			res.json(dbExamples);
		});
	});

	// Create a new example
	app.post("/api/examples", function(req, res) {
		db.Example.create(req.body).then(function(dbExample) {
			res.json(dbExample);
		});
	});

	// Delete an example by id
	app.delete("/api/examples/:id", function(req, res) {
		db.Example.destroy({ where: { id: req.params.id } }).then(function(dbExample) {
			res.json(dbExample);
		});
	});

	//Login Api 

	app.post("/api/login", passport.authenticate("local"), function(req, res) {
		res.json(req.user);
		 
	  });

	//POST route for saving a new user
	app.post("/api/customerSignUp", function(req, res) {
		db.User.create(req.body)
		.then(function() {
		res.redirect(307, "/api/login");
		})
		.catch(function(err) {
		res.status(401).json(err);
		});
	});
	//=========================routes for customer=========
	// GET route for getting all of the customers
	app.get("/api/customers/", function(req, res) {
		db.Customer.findAll({})
			.then(function(dbCustomer) {
				res.json(dbCustomer);
			});
	});

	// Get route for retrieving a single customer
	app.get("/api/customers/:id?", function(req, res) {
		db.Customer.findOne({
			where: {
				id: req.params.id
			}
		}).then(function(dbCustomer) {
			console.log(dbCustomer);
			res.json(dbCustomer);
		});
	});

	// POST route for saving a new customer
	app.post("/api/customers", function(req, res) {
		console.log(req.body);
		db.Customer.create(req.body)
			.then(function(dbCustomer) {
				res.json(dbCustomer);
			});
	});

	// Delete an customer by id
	app.delete("/api/customers/:id", function(req, res) {
		db.Customer.destroy({
			where:
			{ id: req.params.id 
			} 
		}).then(function (dbCustomer) {
			res.json(dbCustomer);
		});
	});

	// PUT route for updating customer
	app.put("/api/posts", function(req, res) {
		db.Customer.update(
			req.body,
			{
				where: {
					id: req.body.id
				}
			}).then(function(dbCustomer) {
			res.json(dbCustomer);
		});
	});

//=========================routes for customer end =========


};
