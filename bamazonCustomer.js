var mysql = require("mysql");
var inquirer = require("inquirer");
var Table = require('cli-table');

// create the connection information for the sql database
var connection = mysql.createConnection({
    host: "localhost",

    // Your port; if not 3306
    port: 3306,

    // Your username
    user: "root",

    // Your password
    password: "root",
    database: "bamazonDB"
});


// connect to the mysql server and sql database
connection.connect(function (err) {
    if (err) throw err;
    // run the start function after the connection is made to prompt the user
    start();
});


// run bamazonCustomer.js application to diplay all the items included in the inventory 
// available for sale.
// include 
// ids, names, and prices

// function which prompts the user for what product and quantity they would like to buy.
function start() {
    console.log("========================================");
    console.log("Items available for Sale");
    console.log("========================================");

    connection.query("SELECT * FROM products", function (err, res) {
        if (err) {
            console.log("Error: " + err);
        }


        // instantiate
        var table = new Table({
            head: ['ID', 'Product Name', 'Department', 'Price', 'Quantity']
            // , colWidths: [100, 200]
        });

        // table is an Array, so you can `push`, `unshift`, `splice` and friends
        for (var i = 0; i < res.length; i++) {
            var productArr = [];
            for (var key in res[i]) {
                productArr.push(res[i][key]);
                // table is an Array, so you can `push`, `unshift`, `splice` and friends
            }
            table.push(productArr);
        }

        console.log(table.toString());
        Order();
    });
}

function Order() {
    inquirer.prompt([{
        name: "id",
        type: "input",
        message: "Which item would you like to purchase?"
    },
    {
        name: "quantity",
        type: "input",
        message: "How many units of the product you would like to buy?"
    }])
        .then(function (answer) {
            var temp = "SELECT quantity,price FROM products WHERE ?";
            var id = parseInt(answer.id);
            connection.query(temp, { id: id }, function (err, data) {
                //console.log(data[0].price);
                if (err) {
                    console.log(err);
                }

                if (data[0].quantity >= parseInt(answer.quantity)) {
                    //Query for Update quantity
                    var q = data[0].quantity - parseInt(answer.quantity);
                    console.log(id);
                    connection.query("UPDATE products SET ? WHERE ?", [{ quantity: q }, { id: id }], function (err, q_data) {
                        if (err) {
                            return console.log(err);
                        }
                        console.log("Quantity updated");
                        var p = data[0].price * parseInt(answer.quantity);
                        console.log("Total price: " + p);
                    });

                }
                else {
                    console.log("Insufficient Quantity!");
                }
                connection.end();
            });
        });
}
