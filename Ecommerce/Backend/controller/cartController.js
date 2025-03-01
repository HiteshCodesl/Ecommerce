const cartModel = require("../models/cartModel") ;
const cartRoute = require("../routes/cartRoute")
const cartservice = require("../service/cartService")

module.exports.addtoCart = async (req , res , next)=>{
    try{
    const {productId , name, price, image, category} = req.body;

    const product = await cartservice.addCart({
        productId, name, price, image, category 
    })

    res.status(200).json({"added": product})


    } catch(err){
        res.status(400).json({"error while adding to cart": err})
    } 
}