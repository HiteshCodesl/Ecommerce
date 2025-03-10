const express = require("express")
const router = express.Router();
const { body } = require("express-validator")
const userController = require("../controller/userController")
const auth = require("../middleware/auth")


router.post("/register",[
    body("email").isEmail().withMessage("email must be valid"),
    body("username").isLength({min:2}).withMessage("name must be valid"),
    body("password").isLength({min:6}).withMessage("password must be 6 char long")
],
 userController.registerUser
)

router.post("/login", [
    body("email").isEmail().withMessage("Email must be valid"),
    body("password").isLength({min:6}).withMessage("password must be 6 char long")
],
userController.loginUser
)

router.get("/profile", auth.authUser, userController.getUserProfile )

router.post("/logout", auth.authUser, userController.logoutUser)

module.exports = router