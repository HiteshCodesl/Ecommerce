const userModel = require("../models/userModel")

module.exports.createUser = async ({
    username, email, password
}) => {
    if (!username || !email || !password) {
        throw new Error("all fields are required");
    }

    const user = await userModel.create({
        username,
        email,
        password
    })
  
    return user
}