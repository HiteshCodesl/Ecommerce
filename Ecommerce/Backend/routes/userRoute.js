const express = require("express")
const router = express.Router();
const { body } = require("express-validator")
const userController = require("../controller/userController")

router.post("/register",[
    body("email").isEmail().withMessage("email must be valid"),
    body("username").isLength({min:2}).withMessage("name must be valid"),
    body("password").isLength({min:6}).withMessage("password must be 6 char long")
],
 userController.registerUser
)
console.log("user route rergister endpoint fetched")

module.exports = router