const express = require('express');
const quaryRouter = express.Router();
const userModel = require('../models/user.model')


quaryRouter.post('/contect',async(req,res)=>{

    const {name,email,Number,message} = req.body;


        const user = await userModel.create({

            name,email,Number,message

        })

        res.status(200).send({message : "your quary is submited", user})
})

quaryRouter.get('/getquary',async(req,res)=>{

    const user = await userModel.find() 

    res.status(200).send({message : "all quary", user})
})













module.exports = quaryRouter;