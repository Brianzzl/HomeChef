$(document).ready(function() {


	// Adding an event listener for when the data is submitted
	$("#submit").on("click",function(){
		event.preventDefault();

		var newCustomer = {
			lastName: $("#lastName").val().trim(),
			firstName: $("#firstName").val().trim(),
			email: $("#email").val().trim(),
			password:$("#password").val().trim(),
			phone: $("#phone").val().trim(),
			Address: $("#address").val().trim(),
			city: $("#city").val().trim(),
			stove: $("#hobType").val().trim(),
			hobs: $("#hobNumber").val().trim(),
			oven: $("#haveOven").val().trim(),
			foodRest: $("#foodRes").val().trim(),
			fdRestType: $("#foodType").val().trim()

		};
		
		console.log(newCustomer);

		var newUser = {
			userType:"Customers",
			email: $("#email").val().trim(),
			password:$("#password").val().trim()
		};
		console.log(newUser);



		// if (updating) {
		// 	newCustomer.id = CustomerId;
		// 	update(newPost);
		// }
		// else {
		// 	submitPost(newPost);
		// }
		submitCustomer(newCustomer);
		submitUser(newUser);
		
	}); 


  
	// Submits a new post and brings user to blog page upon completion
	function submitCustomer(customer) {
		$.post("/api/customers/", customer, function() {
			console.log("new customer added ");
		});
	}

	function submitUser(user) {
		$.post("/api/customerSignUp", user)
		  .then(function(data) {
				window.location.replace("/customers");
			// If there's an error, handle it by throwing up a bootstrap alert
		  })
		  .catch(handleLoginErr);
	  }
	
	  function handleLoginErr(err) {
		$("#alert .msg").text(err.responseJSON);
		$("#alert").fadeIn(500);
	  }
	
	
});
  