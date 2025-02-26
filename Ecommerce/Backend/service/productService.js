const productModel = require("../models/productsModel")

module.exports.createProduct = async({
    productName, description, price, category
})=>{
    if(!productName || !description || !price || !category){
        throw new Error("all fields are required")
    }

    const product = await productModel.create({
        productName, description, price, category
    })

    return product;
}


