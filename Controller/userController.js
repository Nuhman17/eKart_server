const users = require('../Models/userModel')
const jwt = require('jsonwebtoken')


exports.userRegistration = async (req, res) => {
    try {

        const { username,email,password } = req.body
        const existingUser = await users.findOne({ email })
        if (existingUser) {
            res.status(406).json("User Alredy Exists!!")
        }
        else {
            const newUser = new users({ email,username,password })
            await newUser.save()
            res.status(200).json(newUser)
        }
    }
    catch (err) {
        console.log(err)
        res.status(400).json(err)
    }

}

exports.userLogin = async (req, res) => {
    try {

        const { email, password } = req.body
        const existingUser = await users.findOne({ email, password })
        if (existingUser) {
            const token = jwt.sign({ userId: existingUser._id }, process.env.secretKey)
            res.status(200).json({ username:existingUser.username, token })
        }
        else {
            res.status(406).json("Inavalid Email/Password!!")
        }
    }
    catch (err) {
        console.log(err)
        res.status(400).json(err)
    }


}