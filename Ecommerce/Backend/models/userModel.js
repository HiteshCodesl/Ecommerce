const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    username:{
        type: String,
        required: true,
        minlength: [3, "username must be 3 char long"]
    },
    email:{
        type: String,
        required: true,
        minlength: [3, "email must be valid"]
    },
    password:{
        type: String,
        required: true
    }
})

const userModel = mongoose.model("users", userSchema);
module.exports = userModel;