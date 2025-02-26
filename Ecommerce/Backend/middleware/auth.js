const blackListModel = require("../models/blackListModel");
const userModel = require("../models/userModel")
const jwt = require("jsonwebtoken");


module.exports.authUser = async(req , res , next)=>{
 
    const token = req.cookies.token || req.headers.authorization?.split(' ')[1]

    if(!token){
        res.status(400).send({message: "Invalid credential"})
    }
    const isBlackListed = await blackListModel.findOne({token})

    if(isBlackListed){
        res.status(401).json({
            message: "unauthorized"
        })
    }
    
    try{
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        const user = await userModel.findById(decoded._id)
        req.user = user;
        return next();
    }
    catch(err){
      return res.status(400).json({
        message: "unauthorized"
      })
    }
}