const express = require("express");
const router = express.Router();
const Laptop = require("../models/laptops.js");

router.get("/", async (req, res) => {
    console.log("GET request for all laptops");
    try {
        console.log("Running Laptop.find() query...");
const laptops = await Laptop.find();
console.log("Laptop.find() query returned:", laptops);
        return res.json(laptops);
    } catch (err) {
        return res.json({ message: err });
    }
});

module.exports = router;