var mysql = require("mysql");
var inquirer = require('inquirer');

var connection = mysql.createConnection({
	host: "localhost",
	port: 3306,

	// Your username
	user: "root",

	// Your password
	password: "fuchibabe13",
	database: "bamazon"
});
//function to display Inventory
function bamazonInventory() {
	//variable to store command for query
	var	queryStr = 'SELECT * FROM bamazon_table';
	
		connection.query(queryStr, function (error, response) {
			if (error) throw error;
			//variable to store response
			var dataDisplayed = '';
			console.log("\nBamazon has in invetory the following products: \n");
			for (var i = 0; i < response.length; i++) {
				dataDisplayed = '';
				dataDisplayed += 'Item ID: ' + response[i].item_id + ' | ';
				dataDisplayed += 'Product Name: ' + response[i].product_name + ' | ';
				dataDisplayed += 'Department: ' + response[i].department_name + ' | ';
				dataDisplayed += 'Price: $' + response[i].price + '\n';
			
				console.log(dataDisplayed);
				console.log("\n.............................................................................\n");
			}
	
			console.log("\n============================================================================\n");
			inquirerPrompt();
		})
	}
//Function to prompt user
function inquirerPrompt() {
	//inquirer input 
	inquirer.prompt([{
			type: 'input',
			name: 'item_id',
			message: 'Please enter the Item ID which you would like to purchase.',
			filter: Number
		},
		{
			type: 'input',
			name: 'quantity',
			message: 'How many do you need?',
			filter: Number
		}
	])
	.then(function (input) {
		//variables to store the user input 
		var itemId = input.item_id;
		var userUnits = input.quantity;
		//variable to store command for query
		var queryStr = 'SELECT * FROM bamazon_table WHERE ?';

		connection.query(queryStr, {item_id: itemId}, function(error, response) {
			if (error) throw error;

			if (response.length === 0) {
				bamazonInventory();
			} else {
				var productData = response[0];

				if (userUnits <= productData.stock_quantity) {
					
					var updateQueryStr = 'UPDATE bamazon_table SET stock_quantity = ' + (productData.stock_quantity - userUnits) + ' WHERE item_id = ' + itemId;

					connection.query(updateQueryStr, function (error, response) {
						if (error) throw error;
						console.log("\n============================================================================\n");
						console.log('The oder has been placed! Total is : $' + productData.price * userUnits);
						console.log("\n============================================================================\n");

						connection.end();
					})
				} else {

					console.log("\n============================================================================\n");
					console.log('Insufficient quantity!');
					console.log("\n============================================================================\n");
				}
			}
		})
	})
}
//function to start app
function Bamazon() {

	bamazonInventory();
}
//initialize app
Bamazon();