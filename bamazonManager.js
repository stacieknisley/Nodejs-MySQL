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


// run bamazonManager.js application to diplay all the items included in the inventory 
// available for sale.
// include 
// ids, names, department, price and avaialable quantity


// 1. Create/Add New Product
// 2. Read/Display Inventory quantity under 5
// 3. Update/Add to Inventory or updated a product
// 4. Display
// use CRUD to Create/add product, Read/display quantity of a product
// and Updated existing product 


// 4. name this function to (CRUD) D = Display
// function to view all products for sale
// * View Products for Sale
// write commands in MySQL

function start() {
    console.log("========================================");
    console.log("All Products for Sale");
    console.log("========================================");

    connection.query("SELECT * FROM products", function (err, res) {
        // query ask to slect all the products from the inventory, 
        // the function is to list all the errors with "err" and respond with "res"
        if (err) {
            console.log("Error: " + err);
        }

        // instantiate
        // the variable is the table and the table contains 
        // the ID, Product Name, Department, Price, and Quantity in the inventory.
        var table = new Table({
            head: ['ID', 'Product Name', 'Department', 'Price', 'Quantity']
            // , colWidths: [100, 200]
        });

        // table is an Array, so you can `push`, `unshift`, `splice` and friends
        for (var i = 0; i < res.length; i++) {
            var productArr = [];
            // this indicates the Array "[]"
            for (var key in res[i]) {
                productArr.push(res[i][key]);
            }
            table.push(productArr);
        }
        console.log(table.toString());
        Order();

    });


    // 1. name this function to (CRUD) C = Create or addProduct...
    function addProduct() {
        console.log("Inserting a new product...\n");
        var query = connection.query(
            "INSERT INTO bamazonDB SET ?",
            // the ? mark is a place holder for item id #13 information.
            {
                id: 13,
                product_name: "KitchenAid Pasta Press",
                department: "Small Appliances",
                price: 126,
                quantity: 18
            },
            function (err, res) {
                console.log(res.affectedRows + " product inserted!\n");
                // Call addProduct AFTER the INSERT completes
                addProduct();
            }
        );

        // logs the actual query being run
        console.log(query.mysql);
    }
}


// 3. name this function (CRUD) U =  UpdateProduct or add inventory to existing product...
function updateProduct() {
    console.log("Update quantity...\n");
    var query = connection.query(
        "UPDATE bamazonDB SET ? WHERE ?",
        // ? is a place holder for the information contained in the 
        // first object to set the quantity to 83 where it was 88,
        // in the second object.
        [
            {
                id: 5,
                product_name: "Sparkle paper towels",
                department: "House Cleaning",
                price: 4,
                quantity: 83
            },
            {
                id: 5,
                product_name: "Sparkle paper towels",
                department: "House Cleaning",
                price: 4,
                quantity: 88
            }
        ],
        function (err, res) {
            console.log(res.affectedRows + " products updated!\n");
            // Call deleteProduct AFTER the UPDATE completes
            updateProduct();
        }
    );

    // logs the actual query being run
    console.log(query.sql);
}


// Display Inventory quantity under 5
// name this function Read
// 2. name this function (CRUD) R = Read all producs with low inventory/quantity under 5
function readProducts() {
    var query = "SELECT quantity FROM products GROUP BY product_name HAVING count(*) < 5";
    connection.query(query, function (err, res) {
        for (var i = 0; i < res.length; i++) {
            console.log(res[i].product_name);
        }
        runSearch();
    });
}



