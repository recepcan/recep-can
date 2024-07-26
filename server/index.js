import express, { json } from 'express'
 import mongoose from 'mongoose'
 import dotenv from 'dotenv'
 import userRoutes from './routes/userRoutes.js'
 import authRoutes from './routes/authRoutes.js'
const app = express()
app.use(express.json())
dotenv.config()

mongoose.connect(process.env.MONGO_URI).then(
    ()=>{console.log("mongodb is connected")}
).catch((e)=>{
    console.log(e)
})



app.use('/api/user',userRoutes)
app.use('/api/auth',authRoutes)

app.listen(5000,()=>{
    console.log("server is running on port  5000")
})