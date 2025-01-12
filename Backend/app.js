const express=require('express');
const app=express();
const morgan=require('morgan')
const mongoose=require('mongoose');
const { Product } = require('./models/product');
const productsRouter=require('./routers/products')
const cors=require('cors')
require('dotenv/config')
app.use(express.json())
app.use(morgan('tiny'))
const api=process.env.API_URL
app.use(cors())
app.options('*',cors())



app.use(`${api}/products`,productsRouter)

mongoose.connect('mongodb://127.0.0.1:27017/eshop-database').then(()=>{
    console.log('database connected...')

}).catch((err)=>{
    console.log(err)
})

app.listen(3000,()=>{
    console.log('server is running....')
})