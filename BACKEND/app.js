require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const laptopsRouter = require("./routers/laptops");

app.use(cors());
app.use(express.json());
app.use("/laptops", laptopsRouter);

module.exports = app;
