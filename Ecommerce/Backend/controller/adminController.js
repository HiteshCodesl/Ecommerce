const adminModel = require("../models/adminModel")
const adminService = require("../service/adminService")
const {validationResult} = require("express-validator")
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

module.exports.registerAdmin = async(req, res, next)=>{

    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({error: errors.array()});
    }
   
    const {username, email, password} = req.body;

    const isAdminAlreadyExist = await adminModel.findOne({email});

    if(isAdminAlreadyExist){
        res.status(400).json({error: "user already exists"})
    }

    const hashedPassword = await bcrypt.hash(password, 10)

    const admin = await adminService.createAdmin({
        email,
        username,
        password: hashedPassword
    })

    const token = await jwt.sign({_id: admin._id }, process.env.JWT_SECRET_ADMIN)

    res.status(200).json({token, admin})
}

module.exports.loginAdmin = async(req, res, next)=>{
    const errors = validationResult(req);
    if(!errors.isEmpty()){
       return res.status(400).json({errors: errors.array()})
    }
    const {email, password}  = req.body;
    
    const admin = await adminModel.findOne({email})

    if(!admin){
        res.status(400).json({message: "user not found"})
    }
 
    const passwordMatch = await bcrypt.compare(password, admin.password)

     if(!passwordMatch){
        res.status(400).json({message: "Incorrect email or password"})
     }
     const token = await jwt.sign({_id: admin._id}, process.env.JWT_SECRET_ADMIN)

     res.status(200).json({
        token, message: "you are signed in"
     })
}