const express=require('express');
const app=express();
const morgan=require('morgan')
const mongoose=require('mongoose');
const { Product } = require('./models/product');
const productsRoutes=require('./routes/products')
const categoriesRoutes=require('./routes/categories')
const usersRoutes = require('./routes/users');
const cors=require('cors');
const authJwt = require('./helpers/jwt');
const errorHandler = require('./helpers/error-handler');
require('dotenv/config')
app.use(express.json())
app.use(morgan('tiny'))
const api=process.env.API_URL
app.use(cors())
app.options('*',cors())

app.use(authJwt())
app.use(errorHandler)

app.use(`${api}/products`,productsRoutes);
app.use(`${api}/categories`,categoriesRoutes);
app.use(`${api}/users`, usersRoutes);

mongoose.connect('mongodb://127.0.0.1:27017/eshop-database').then(()=>{
    console.log('database connected...')

}).catch((err)=>{
    console.log(err)
})

app.listen(3000,()=>{
    console.log('server is running....')
})