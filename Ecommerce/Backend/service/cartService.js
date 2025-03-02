const cartModel = require("../models/cartModel");

module.exports.addCart = async ({
    productId, name, price , category, image, 
})=>{
    if(!productId || !name || !price || !category || !image){
        throw new Error("all fields are required")
    }

    const cart = await cartModel.create({
        productId, name, price, category, image
    })
  
    return cart
}