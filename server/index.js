import express, { json } from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import userRoutes from './routes/userRoutes.js'
import authRoutes from './routes/authRoutes.js'
const app = express()
app.use(express.json())
dotenv.config()

mongoose.connect(process.env.MONGO_URI).then(
    () => { console.log("mongodb is connected") }
).catch((e) => {
    console.log(e)
})



app.use('/api/user', userRoutes)
app.use('/api/auth', authRoutes)



app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || "internal server error";

    res.status(statusCode).json({
        success: false,
        statusCode,
        message
    })
})



app.listen(5000, () => {
    console.log("server is running on port  5000")
})