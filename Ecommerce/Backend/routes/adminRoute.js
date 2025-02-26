const express = require("express")
const router = express.Router();
const { body } = require("express-validator")
const adminController = require("../controller/adminController")
const adminauth = require("../middleware/auth")


router.post("/register",[
    body("email").isEmail().withMessage("email must be valid"),
    body("username").isLength({min:2}).withMessage("name must be valid"),
    body("password").isLength({min:6}).withMessage("password must be 6 char long")
],
adminController.registerAdmin
)

router.post("/login", [
    body("email").isEmail().withMessage("Email must be valid"),
    body("password").isLength({min:6}).withMessage("password must be 6 char long")
],
adminController.loginAdmin
)

module.exports = router