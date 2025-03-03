const mongoose = require("mongoose");

const adminSchema = new mongoose.Schema({
    username:{
        type: String,
        required: true,
        minlength: [3, "username must be 3 char long"]
    },
    email:{
        type: String,
        required: true,
        minlength: [3, "email must be valid"],
        unique: true
    },
    password:{
        type: String,
        required: true
    }
})

const adminModel = mongoose.model("admin", adminSchema);
module.exports = adminModel;