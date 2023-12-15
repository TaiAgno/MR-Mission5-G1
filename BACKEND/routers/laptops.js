const express = require("express");
const router = express.Router();
const Laptop = require("../models/laptops.js");
// const Monitor = require("../models/monitors.js");
// const Keyboard = require("../models/keyboards.js");

const getModel = (modelType) => {
    switch (modelType) {
        case 'laptops':
            return Laptop;
        // case 'monitors':
        //     return Monitor;
        // case 'keyboards':
        //     return Keyboard;
        default:
            return null;
    }
}

router.get("/:productType", async (req, res) => {
    console.log(`GET request for all ${req.params.productType}`);
    try {
        const Model = getModel(req.params.productType);
        if (!Model) {
            return res.status(400).json({ message: 'Invalid product type' });
        }
        console.log(`Running ${Model.modelName}.find() query...`);
        const products = await Model.find();
        console.log(`${Model.modelName}.find() query returned:`, products);
        return res.json(products);
    } catch (err) {
        return res.json({ message: err });
    }
});

module.exports = router;