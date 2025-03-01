const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema({
    productId:{
        type:Number,
        required: true
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
    },
    image: {
        type: String,
        required: true
    }
})

const cartModel = mongoose.model("cart", cartSchema)
module.exports = cartModel;