// ...........Importing NPM Packages............

const express=require ("express")
const cors=require("cors")
require("dotenv").config()


// ............Importing Custom Modules And Routers..........

const {connection}=require("./db")
const {categoryRouter}=require("./routes/categories")
const {productsRouter}=require("./routes/products")


// ............Defining App............

const app=express()

// Midlleware For CORS Policy
app.use(cors())

// Middleware to parse JSON requests
app.use(express.json())

// Defining a default route for API Testing
app.get("/",(req,res)=>{
    res.send(`E-commerce API is up and running!`)
})

// Mounting The Routes
app.use("/categories",categoryRouter)
app.use("/products",productsRouter)



app.listen(process.env.PORT || 3000,async()=>{
    try {
        await connection
        console.log(`Successfully Connected to Database`)
    
    } catch (error) {
        console.log(`There was an error in connecting With the Database, Error:${error}`)
    }
    console.log(`Server is running on Port:${process.env.PORT || 3000}`)
    
})