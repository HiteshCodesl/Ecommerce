const productModel = require("../models/productsModel")
const productService = require("../service/productService")

module.exports.addProduct = async (req, res, next)=>{
    try{
        const { productName, description, price, category } = req.body;

        const product = await productService.createProduct({
            productName, description, price, category
        })
    
        return res.status(201).json("successfully added the product")

    }catch(err){
        return res.status(500).send({"Failed to add product": err})
    }
}

module.exports.updateProducts = async(req, res, next)=>{
    try{
        const { productName, description, price, category, productId } = req.body;

     const updatedProduct = await productModel.updateOne({
        _id: productId,
    },{
        productName, description, price, category
    })

        return res.status(201).json("product updated successfully")

    }catch(err){
        return res.status(500).send({"failed to update product": err})
    }
}

module.exports.viewProducts = async(req, res, next)=>{
    try{
        const products = await productModel.find();
        
         return res.status(201).send(products)

    }catch(err){
        return res.status(500).send({"failed to view products": err})
    }
}

module.exports.removeProducts = async(req, res, next)=>{
    try{
        const {productId} = req.body

        const removeProduct = await productModel.deleteOne({
            _id: productId
        })

        return  res.status(201).json("product deleted successfully")

    }catch(err){
        return res.status(500).send({"failed to delete products": err})
    }
}

