const productModel = require("../models/productsModel")

module.exports.createProduct = async({
    name, price, category, image
})=>{
    if(!name  || !price || !category || !image){
        throw new Error("all fields are required")
    }

    const product = await productModel.create({
        name, price, category, image
    })

    return product;
}


