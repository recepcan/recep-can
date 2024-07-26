import User from '../models/userModel.js'
import bcrypt from 'bcryptjs'
import { errorHandler } from '../utils/error.js'

export const signUp = async (req, res,next) => {
    const { username, email, password } = req.body


    if (!username || !email || !password || username === '' || email === '' || password === '') {
    next(errorHandler(400,"all fields are required"))
    }

const hashedPassword= bcrypt.hashSync(password,10)

    const newUser = User({
        username,
        email,
        password:hashedPassword
    })


    try {
        await newUser.save()
        res.json("succesful")
    } catch (error) {
        next(error)

    }



}