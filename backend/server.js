import express from 'express'
import dotenv from 'dotenv'
import colors from 'colors'
import {notFound , errorHandler} from './middleware/errorMiddleware.js'
import connectDB from './config/db.js'
import productRouters from './routes/productRoutes.js'
dotenv.config()

connectDB()
const app = express()

app.get('/',(req,res) => {
    res.send('API IS Runnig.....')
})

app.use('/api/products',productRouters)


app.use(notFound) 


app.use(errorHandler) 



const PORT = process.env.PORT || 5000
app.listen(
    PORT,console.log(`Server Runnig in ${process.env.NODE_ENV} mode on Port ${PORT}`.yellow.bold))
