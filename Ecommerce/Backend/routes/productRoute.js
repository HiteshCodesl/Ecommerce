const express = require("express");
const router = express.Router();
const { body } = require("express-validator")
const productController = require("../controller/productController");
const auth = require("../middleware/auth");


router.post("/addProduct",[
    body("productName").isLength({min: 2}).withMessage("product name must be valid"),
    body("description").isLength({min: 2}).withMessage("description must be provided"),
    body("price").isNumeric({min:1 }).withMessage("price must be in numbers"),
    body("category").isLength({min:2}).withMessage("category must be defined")
], 
auth.authAdmin, productController.addProduct
)

router.put("/updateProducts", [
    body("productName").isLength({min: 2}).withMessage("product name must be valid"),
    body("description").isLength({min: 2}).withMessage("description must be provided"),
    body("price").isNumeric({min:1 }).withMessage("price must be in numbers"),
    body("category").isLength({min:2}).withMessage("category must be defined")
],
auth.authAdmin, productController.updateProducts
)


router.get("/viewProducts", productController.viewProducts)

router.delete("/removeProducts", auth.authAdmin, productController.removeProducts)

module.exports = router;