# Triveous E-commerce API with Node.js

This is a backend API for an e-commerce platform built with Node.js. It supports various e-commerce operations, including product and category listing, product details, cart management, order processing, user authentication, and more.

**Live Server:** [Link to Live Server](https://triveous-ecommerce-api-h0pq.onrender.com)

## Table of Contents

- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Database](#database)
- [Authentication](#authentication)
- [Error Handling](#error-handling)
- [Documentation](#documentation)
- [Rate Limiting](#rate-limiting)

## Features

- List and categorize products.
- View product details.
- Add, update, and remove products from the cart.
- Place orders with items from the cart.
- View order history for authenticated users.
- User registration and login.
- Secure authentication with JWT (JSON Web Tokens).
- Error handling with meaningful messages and status codes.
- API documentation using Swagger.
- Rate limiting to prevent abuse.

## Getting Started

### Prerequisites

Before running the API, ensure you have the following dependencies installed:

- Node.js and npm
- MongoDB (or another suitable database)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/atir09/triveous-ecommerce-BE.git
   cd triveous-ecommerce-BE
   ```
2. Install dependencies:

    ```bash
   npm install
   ```

3. Configure environment variables (if required) in a .env file

4. Start the API:

    ```bash
    npm start
    ```

     The API should now be running on http://localhost:8080 (or another specified port).

## Usage

You can use this API to build your e-commerce application. To interact with the API, you can make HTTP requests to the provided endpoints. Ensure you have proper authentication tokens (JWT) for protected endpoints.


## API Endpoints

The API offers the following endpoints:

- Category Listing: GET /categories
- Product Listing: GET /products/category/{categoryId}
- Product Details: GET /products/{productId}
-  ### Cart Management:
- Add Product: POST /cart/add
- View Cart: GET /cart/view
- Update Cart Item: PUT /cart/update/{cartItemId}
- Remove Cart Item: DELETE /cart/delete/{cartItemId}
-  ### Order Placement:
- Place Order: POST /orders/place
- Order History: GET /orders/history
- Order Details: GET /orders/{orderId}
-  ### User Authentication:
- Register: POST /user/register
- Login: POST /user/login

Please refer to the API documentation for detailed information on request and response formats.

## Database
The API is designed to work with MongoDB to manage product data, user cart information, and order details. You can configure the database connection in the .env file.

## Authentication
User authentication is handled using JSON Web Tokens (JWT). Users can register and log in to obtain a token for authentication.

## Error Handling
The API returns meaningful error messages and status codes when necessary to provide clear feedback to clients.

## Documentation
API documentation is available using Swagger. You can access the documentation at /api-docs when the server is running.

## Rate Limiting
The API includes rate limiting to prevent abuse and maintain server stability. The default rate limit is set to maximum 100 requests per 15-minute window..





