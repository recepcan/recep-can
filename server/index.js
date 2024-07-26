import express from 'express'
 import mongoose from 'mongoose'
 import dotenv from 'dotenv'
const app = express()

dotenv.config()


mongoose.connect(process.env.MONGO_URI).then(
    ()=>{console.log("mongodb is connected")}
).catch((e)=>{
    console.log(e)
})

app.listen(5000,()=>{
    console.log("server is running on port  5000")
})