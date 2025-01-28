const express=require('express');
const app=express();
const morgan=require('morgan')
const mongoose=require('mongoose');
const { Product } = require('./models/product');
const cors=require('cors');
const authJwt = require('./helpers/jwt');
const errorHandler = require('./helpers/error-handler');
require('dotenv/config')


//middleware
app.use(express.json())
app.use(morgan('tiny'))
app.use(cors())
app.options('*',cors())
app.use(authJwt())
app.use(errorHandler)

//Routes
const categoriesRoutes = require('./routes/categories');
const productsRoutes = require('./routes/products');
const usersRoutes = require('./routes/users');
const ordersRoutes= require('./routes/orders');

const api=process.env.API_URL

app.use(`${api}/products`,productsRoutes);
app.use(`${api}/categories`,categoriesRoutes);
app.use(`${api}/users`, usersRoutes);
app.use(`${api}/orders`, ordersRoutes);

mongoose.connect('mongodb://127.0.0.1:27017/eshop-database').then(()=>{
    console.log('database connected...')

}).catch((err)=>{
    console.log(err)
})

app.listen(3000,()=>{
    console.log('server is running....')
})