CREATE DATABASE bamazon;
USE bamazon;

CREATE TABLE bamazon_table(
item_id INTEGER(40)AUTO_INCREMENT NOT NULL,
product_name TEXT,
department_name TEXT,
price  DECIMAL(10, 4) NULL,
stock_quantity  INTEGER(20),
PRIMARY KEY (item_id)
)

INSERT INTO bamazon_table (item_id, product_name, department_name, price, stock_quantity) VALUES (1, "Blender", "Appliances", 59.99,1000);
INSERT INTO bamazon_table (item_id, product_name, department_name, price, stock_quantity) VALUES (2, "Flat 60'' LED TV", "TV&HomeTheater", 999.99, 500);
INSERT INTO bamazon_table (item_id, product_name, department_name, price, stock_quantity) VALUES (3, "Hardcore Personal Coputer", "Computers&Tablets", 1999.99,1000);
INSERT INTO bamazon_table (item_id, product_name, department_name, price, stock_quantity) VALUES (4, "Beutifier Camera", "Cameras&Camcorders", 499.99, 500);
INSERT INTO bamazon_table (item_id, product_name, department_name, price, stock_quantity) VALUES (5, "New Trend Cellphone", "Cellphones",  999.99, 5000);
INSERT INTO bamazon_table (item_id, product_name, department_name, price, stock_quantity) VALUES (6, "Big Head Headphones 2.0", "Audio", 99.99,1000);
INSERT INTO bamazon_table (item_id, product_name, department_name, price, stock_quantity) VALUES (7, "Pac MAN", "Video Games", 9.99, 3000);
INSERT INTO bamazon_table (item_id, product_name, department_name, price, stock_quantity) VALUES (8, "BlueRay Movies we Love", "Movies&Music", 19.99,3000);
INSERT INTO bamazon_table (item_id, product_name, department_name, price, stock_quantity) VALUES (9, "Vehicle speakers 10''", "Car Electronics", 49.99,2000);
INSERT INTO bamazon_table (item_id, product_name, department_name, price, stock_quantity) VALUES (10, "Leather chair", "Garage&Office", 89.99,2000);

DROP TABLE bamazon_table;

SELECT * FROM bamazon_table;
