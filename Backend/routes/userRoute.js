const express = require('express');
const User = require('../Schema/userSchema');
const router = express.Router();
const bcrypt = require('bcrypt')

router.post('/register', async (req, res) => {
    const { email, phone, password, username } = req.body;
    const userExist = await User.findOne({ email })
    if(userExist){
        res.status(400).json({ message: 'User already exists' })
    }
    const salt = await bcrypt.genSalt(10) //bcrypt iteration count
    const hashPassword = await bcrypt.hash(password, salt)
    try {
        await User.create({
            email,
            phone,
            password: hashPassword,
            username
        })
        res.status(200).json({ message: 'User Created' })
    } catch (error) {
        res.status(500).json({ message: 'Error in creating user' })
    }
})

module.exports = router;