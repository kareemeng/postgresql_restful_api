# database set up

in terminal.
1-su postgres
2-psql postgres
3-CREATE USER <usder_name> WITH PASSWORD '<your_password>';
4-CREATE DATABASE <DB_name>;
5-CREATE DATABASE <test_DB_nsme>;
6-GRANT ALL PRIVILEGES ON DATABASE <DB_name> TO <user_name>;
7-GRANT ALL PRIVILEGES ON DATABASE <test_db_name> TO <user_name>;

## API Endpoints

# Products

-   Index : GET /products/index
-   Show GET /products/show/:id
-   Create POST /products/create

# Users

-   Index GET /users/index
-   Show GET /users/show/:id
-   Create POST /users/create

# Orders

-   Current Order by user (args: user id)[token required] :GET /orders/userOrders/:id
-   Completed Orders by user GET /orders/completeduserOrders/:id

the scripts as shown below
1-"testdb" : to begin testing using the test database
2-"lint" :to use linter
3-"prettier" : to use the prettier
4-"start" : to start the app using nodemon
5-"down:test" :drop all tables in test database
