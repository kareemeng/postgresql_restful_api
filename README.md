# database set up

##### DB port 
5432 [default]
## in terminal.

-   su postgres
-   psql postgres
-   CREATE USER <usder_name> WITH PASSWORD '<your_password>';
-   CREATE DATABASE <DB_name>;
-   CREATE DATABASE <test_DB_nsme>;
-   GRANT ALL PRIVILEGES ON DATABASE <DB_name> TO <user_name>;
-   GRANT ALL PRIVILEGES ON DATABASE <test_DB_name> TO <user_name>;

## API Endpoints

### Products

-   Index : GET /products/index
-   Show GET /products/show/:id
-   Create POST /products/create

### Users

-   Index GET /users/index
-   Show GET /users/show/:id
-   Create POST /users/create

### Orders

-   Current Order by user (args: user id)[token required] :GET /orders/userOrders/:id
-   Completed Orders by user GET /orders/completeduserOrders/:id

# scripts

-   "testdb" : to begin testing using the test database
-   "lint" :to use linter
-   "prettier" : to use the prettier
-   "start" : to start the app using nodemon
-   "down:test" :drop all tables in test database
