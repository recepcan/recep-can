import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import userRoutes from './routes/userRoutes.js'
import authRoutes from './routes/authRoutes.js'
import postRoutes from './routes/postRoutes.js'
import TextRoutes from './routes/TextRoutes.js'
import contactRoutes from './routes/contactRoutes.js'
import cookieParser from 'cookie-parser'
import path from 'path'
import cors from 'cors'


const app = express()
app.use(express.json())

const __dirname=path.resolve()

app.use(cors({
  origin: 'https://my-personal-blog-client-46ykqrc9v-recep-cans-projects-708fffa6.vercel.app/', 
  methods: ['GET', 'POST', 'PUT','PATCH', 'DELETE'],
  credentials: true
}));

dotenv.config()
app.use(cookieParser())
mongoose.connect(process.env.MONGO_URI).then(
    () => { console.log("mongodb is connected") }
).catch((e) => {
    console.log(e)
})



app.use('/api/user', userRoutes)
app.use('/api/auth', authRoutes)
app.use('/api/post', postRoutes)
app.use('/api/text', TextRoutes)
app.use('/api/contact',contactRoutes)



app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || "internal server error";

    res.status(statusCode).json({
        success: false,
        statusCode,
        message
    })
})


app.use(express.static(path.join(__dirname, '/client/dist')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client', 'dist', 'index.html'));
});


app.listen(process.env.PORT || 5000, () => {
    console.log("server is running on port  5000")
})
