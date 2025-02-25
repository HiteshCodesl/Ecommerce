const userModel = require("../models/userModel")
const userService = require("../service/userService")
const {validationResult} = require("express-validator")
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken")

module.exports.registerUser = async(req, res, next)=>{

    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({error: errors.array()});
    }
   
    const {username, email, password} = req.body;

    const isUserAlreadyExist = await userModel.findOne({email});

    if(isUserAlreadyExist){
        res.status(400).json({error: "user already exists"})
    }

    const hashedPassword = await bcrypt.hash(password, 10)

    const user = await userService.createUser({
        email,
        username,
        password: hashedPassword
    })

    const token = await jwt.sign({_id: user._id }, process.env.JWT_SECRET)

    res.status(200).json({token, user})
}