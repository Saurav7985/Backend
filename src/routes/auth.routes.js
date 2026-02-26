const express = require('express')
const userModel = require('../models/user.model')
const jwt = require('jsonwebtoken')

const authRouter = express.Router()

authRouter.post('/register', async (req, res) => {

    const { name, email, password } = req.body;

    const isUserExists = await userModel.findOne({ email });

    if (isUserExists) return res.status(409).json({ message: "user already exists" })

    const user = await userModel.create({
        name, email, password
    })

    const token = jwt.sign(
        {
            id: user._id,
            email: user.email
        }
        , process.env.JWT_SECRET
    )

    res.cookie('jwt_token', token);
    res.status(200).json({ message: "user created successfully", user, token })


})

authRouter.post('/protected', (req, res) => {
    console.log(req.cookies);

    res.status(201).json({
        message: "this is protected routes"
    })

})

authRouter.post('/login', async (req, res) => {

    const { email, password } = req.body;

    const user = await userModel.findOne({ email });

    if (!user) {
        return res.status(404).json({
            message: "user not found!"
        })
    }

    const ispass = user.password === password;

    if (!ispass) {
        return res.status(401).json({
            message: "Password does not match"
        })
    }

    const token = jwt.sign({
        id: user._id,
        email: user.email
    }, process.env.JWT_SECRET)

    res.status(200).json({
        message : "user loged in ",
        token,
        user
    })

})

authRouter.get('/register', async (req, res) => {

    const user = await userModel.find();

    res.status(201).json({
        message: "data fetch succesfully succesfully",
        user
    })

})


module.exports = authRouter;