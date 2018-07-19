DROP DATABASE IF EXISTS bamazon3DB;
CREATE DATABASE bamazon3DB;

USE bamazon3DB;


CREATE TABLE products(
  id INT NOT NULL AUTO_INCREMENT,
  product_name VARCHAR(45) NULL,
  department VARCHAR(45) NULL,
  price INTEGER,
  quantity INTEGER,
  product_sales INTEGER,
  PRIMARY KEY (id)
);


INSERT INTO products (product_name, department, price,quantity,product_sales)
VALUES ("HP Computer", "Tech", 120.00,5,0);

INSERT INTO products (product_name, department, price,quantity,product_sales)
VALUES ("HP printer inks", "Tech", 35.00,36,0);

INSERT INTO products (product_name, department, price,quantity,product_sales)
VALUES ("Black and Decker Mower", "Lawn and Garden", 150.00,4,0);

INSERT INTO products (product_name, department, price,quantity,product_sales)
VALUES ("Paper Yard bags", "Lawn and Garden", 4.00,63,0);

INSERT INTO products (product_name, department, price,quantity,product_sales)
VALUES ("Sparkle paper towels", "House Cleaning", 4.00,88,0);

INSERT INTO products (product_name, department, price,quantity,product_sales)
VALUES ("Dawn dish soap", "House Cleaning", 3.00,54,0);

INSERT INTO products (product_name, department, price,quantity,product_sales)
VALUES ("Xerox paper", "Office", 12.00,43,0);

INSERT INTO products (product_name, department, price,quantity,product_sales)
VALUES ("HON file cabinet", "Office", 200.00,9,0);

INSERT INTO products (product_name, department, price,quantity,product_sales)
VALUES ("Cuisinart coffee maker", "Small Appliances", 95.00,27,0);

INSERT INTO products (product_name, department, price,quantity,product_sales)
VALUES ("KitchenAid Mixer", "Small Appliances", 300.00,3,0);



CREATE TABLE departments(
  id INT NOT NULL AUTO_INCREMENT,
  department_id VARCHAR(45) NULL,
  department_name VARCHAR(45) NULL,
  over_head_costs INTEGER,
  PRIMARY KEY (id)
);

INSERT INTO departments (department_id, department_name, over_head_costs)
VALUES ("001", "Tech", 8000);

iNSERT INTO departments (department_id, department_name, over_head_costs)
VALUES ("002", "Lawnand Garden", 12000);

iNSERT INTO departments (department_id, department_name, over_head_costs)
VALUES ("003", "House Cleaning", 7000);

iNSERT INTO departments (department_id, department_name, over_head_costs)
VALUES ("003", "Office", 9000);

iNSERT INTO departments (department_id, department_name, over_head_costs)
VALUES ("004", "Small Appliances", 15000);



