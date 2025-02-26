const userModel = require("../models/userModel")
const userService = require("../service/userService")
const {validationResult, Result} = require("express-validator")
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

module.exports.loginUser = async(req, res, next)=>{
    const errors = validationResult(req);
    if(!errors.isEmpty()){
       return res.status(400).json({errors: errors.array()})
    }
    const {email, password}  = req.body;
    
    const user = await userModel.findOne({email})

    if(!user){
        res.status(400).json({message: "user not found"})
    }
 
    const passwordMatch = await bcrypt.compare(password, user.password)

     if(!passwordMatch){
        res.status(400).json({message: "Incorrect email or password"})
     }
     const token = await jwt.sign({_id: user._id}, process.env.JWT_SECRET)

     res.status(200).json({
        token, message: "you are signed in"
     })
}

module.exports.profile = async(req, res, next)=>{
    res.status(200).send(req.user)
}