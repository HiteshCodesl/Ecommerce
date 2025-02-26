const adminModel = require("../models/adminModel")

module.exports.createAdmin = async ({
    username, email, password
}) => {
    if (!username || !email || !password) {
        throw new Error("all fields are required");
    }

    const admin = await adminModel.create({
        username,
        email,
        password
    })

    return admin
}