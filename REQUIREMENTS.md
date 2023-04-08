# API Requirements
The company stakeholders want to create an online storefront to showcase their great product ideas. Users need to be able to browse an index of all products, see the specifics of a single product, and add products to an order that they can view in a cart page. You have been tasked with building the API that will support this application, and your coworker is building the frontend.

These are the notes from a meeting with the frontend developer that describe what endpoints the API needs to supply, as well as data shapes the frontend and backend have agreed meet the requirements of the application. 

## API Endpoints
#### Products
- Index : GET /products/index
- Show (args: product id): GET /products/show/:id
- Create (args: Product)[token required]: POST  /products/create
- [OPTIONAL] Top 5 most popular products 
- [OPTIONAL] Products by category (args: product category)

#### Users
- Index [token required]: GET /users/index
- Show (args: id)[token required]: GET  /users/show/:id 
- Create (args: User)[send token]: POST  /users/create

#### Orders
- Current Order by user (args: user id)[token required] :GET /orders/userOrders/:id
- [OPTIONAL] Completed Orders by user (args: user id)[token required]:GET  /orders/completeduserOrders/:id

## Data Shapes
#### Product
-  id
- name
- price
- [OPTIONAL] category

#### User
- id
- firstName
- lastName
- password


#### Orders
- id
- id of each product in the order
- quantity of each product in the order
- user_id
- status of order (active or complete)

# database set up 
in terminal.
1-su postgres
2-psql postgres
3-CREATE USER full_stack_user WITH encrypted PASSWORD 'password123';
4-CREATE DATABASE storefront_DB;
5-CREATE DATABASE storefront_test_DB;
6-GRANT ALL PRIVILEGES ON DATABASE storefront_DB TO full_stack_user;
7-GRANT ALL PRIVILEGES ON DATABASE storefront_test_DB TO full_stack_user;

# database schema
    1-users table
        1-id SERIAL PRIMARY KEY
        2-first_name VARCHAR(64)NOT NULL
        3-last_name VARCHAR(64)NOT NULL
        4-password VARCHAR(255)NOT NULL

    2-products table
        1-id SERIAL PRIMARY KEY
        2-name VARCHAR(100) NOT NULL
        3-price INTEGER NOT NULL

    3-orders table
        1-id SERIAL PRIMARY KEY
        2-user_id bigint REFERENCES users(id)
        3-name VARCHAR(100) NOT NULL
        4-STATUS VARCHAR(10) CHECK(status='active' OR status='complete')

    4-order_products table
        1-id SERIAL PRIMARY KEY
        2-quantity integer
        3-order_id bigint REFERENCES orders(id)
        4-product_id bigint REFERENCES products(id)

