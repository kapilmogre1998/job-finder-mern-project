const express = require('express');
const User = require('../Schema/userSchema');
const router = express.Router();
const bcrypt = require('bcrypt');
const dotenv = require('dotenv')
const jwt = require('jsonwebtoken')
dotenv.config()

router.post('/register', async (req, res) => {
    try {
        const { email, phone, password, username } = req.body;
        const userExist = await User.findOne({ email })
        if (userExist) {
            res.status(400).json({ message: 'User already exists' })
        }
        const salt = await bcrypt.genSalt(10) //bcrypt iteration count
        const hashPassword = await bcrypt.hash(password, salt)
        await User.create({
            email,
            phone,
            password: hashPassword,
            username
        })
        res.status(200).json({ message: 'User Created' })
    } catch (error) {
        console.log("🚀 ~ router.post ~ error:", error)
        res.status(500).json({ message: 'Error in creating user' })
    }
})

router.post('/login', async(req, res) => {
    try {
        const { email, password } = req.body;
        const userExit = await User.findOne({ email })
        if (!userExit) {
            return res.status(400).json({ message: 'Invalid Credentials' })
        }

        const isMatched = await bcrypt.compare(password, userExit.password)

        if (!isMatched) {
            return res.status(400).json({ message: 'Invalid Credentials' })
        }

        const token = jwt.sign({ userId: userExit._id }, process.env.JWT_SECRET)
         
         if (isMatched && token) {
            return res.status(200).json({ message: "Login Successful", token })
        }
    } catch (error) {
        console.log(error);
    }
})

module.exports = router;