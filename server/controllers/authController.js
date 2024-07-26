import User from '../models/userModel.js'
import bcrypt from 'bcryptjs'

export const signUp = async (req, res) => {
    const { username, email, password } = req.body


    if (!username || !email || !password || username === '' || email === '' || password === '') {
        res.status(400).json({ message: "bütün alanların doldurulması zorunludur" })
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
        res.status(500).json({
            message: error.message
        })

    }



}