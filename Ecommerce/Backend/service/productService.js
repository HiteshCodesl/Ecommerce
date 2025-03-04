const productModel = require("../models/productsModel")

module.exports.createProduct = async({
    productId, name, price, category, image
})=>{
    if(!productId || !name  || !price || !category || !image){
        throw new Error("all fields are required")
    }

    const product = await productModel.create({
        productId, name, price, category, image
    })

    return product;
}


