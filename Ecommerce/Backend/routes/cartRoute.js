const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const cartController = require("../controller/cartController")

router.post("/addcart", auth.authUser, cartController.addtoCart
);
module.exports = router