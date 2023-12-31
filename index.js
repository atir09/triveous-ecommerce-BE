// ...........Importing NPM Packages............

const express = require("express")
const cors = require("cors")
require("dotenv").config()
const rateLimit = require('express-rate-limit');

// ............Importing Custom Modules And Routers..........

const { connection } = require("./db")
const { categoryRouter } = require("./routes/categories")
const { productsRouter } = require("./routes/products")
const { cartRouter } = require("./routes/cart")
const { orderRouter } = require("./routes/order")
const { authRouter } = require("./routes/auth")
const {requireAuth}=require("./middleware/auth")

// ...Importing Swagger Modules
const { specs, swaggerUi } = require('./swagger');

// ............Defining App............

const app = express()

// Midlleware For CORS Policy
app.use(cors())

// Middleware to parse JSON requests
app.use(express.json())


//  rate limiter
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // Limit each IP to 100 requests per windowMs
  });


  app.use(limiter);  

// Defining a default route for API Testing
app.get("/", (req, res) => {
    res.send(`E-commerce API is up and running!`)
})

// Mounting The Routes
app.use("/user", authRouter)
app.use("/categories", categoryRouter)
app.use("/products", productsRouter)
app.use("/cart",requireAuth, cartRouter)
app.use("/orders",requireAuth, orderRouter)


//  Swagger documentation
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));


// Starting the Server
app.listen(process.env.PORT || 3000, async () => {
    try {
        await connection
        console.log(`Successfully Connected to Database`)

    } catch (error) {
        console.log(`There was an error in connecting With the Database, Error:${error}`)
    }
    console.log(`Server is running on Port:${process.env.PORT || 3000}`)

})