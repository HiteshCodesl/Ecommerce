const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    productId:{
        type:Number,
        required: true,
        unique: true
    },
    image: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    price: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
    }
})

const productModel = mongoose.model("product", productSchema)

module.exports = productModel;