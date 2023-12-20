const mongoose = require("mongoose");
const Laptop = require("./models/laptops.js");
const fs = require("fs").promises;
const path = require("path");

//seed database with sample data from json file
const seedProducts = async (Model, jsonFilePath) => {
  try {
    // Connect to MongoDB server
    await mongoose.connect("mongodb://mongo:27017/mongo", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    // Check if there are any documents in the collection
    const count = await Model.countDocuments({});
    if (count > 0) {
      console.log("Database already seeded");
      await mongoose.connection.close();
      return;
    }

    const productDataPath = path.resolve(__dirname, jsonFilePath);
    const productData = await fs.readFile(productDataPath);
    const seedProducts = JSON.parse(productData);

    await Model.insertMany(seedProducts);
    console.log("Products added");

    // Close the connection
    await mongoose.connection.close();
  } catch (err) {
    console.error("Not possible to read and/or seed data.", err);
  }
};

seedProducts(Laptop, "./laptops.json");
