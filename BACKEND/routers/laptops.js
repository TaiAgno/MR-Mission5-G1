const express = require("express");
const router = express.Router();
const Product = require("../models/laptops.js");

router.get("/", async (req, res) => {
    console.log("GET request for all laptops");
    try {
        const laptops = await Product.find();
        return res.json(laptops);
    } catch (err) {
        return res.json({ message: err });
    }
});

module.exports = router;