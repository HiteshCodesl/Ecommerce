const userModel = require("../models/userModel")

module.exports.createUser = async ({
    username, email, password
}) => {
    if (!username || !email || !password) {
        throw new Error("all fields are required");
    }
console.log("content comes from usercontroller")
    const user = await userModel.create({
        username,
        email,
        password
    })
    console.log("creating db creds")
    return user
}