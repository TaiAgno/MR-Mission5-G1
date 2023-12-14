const mongoose = require('mongoose');
const Laptop = require('./models/laptops.js');
const fs = require('fs').promises;
const path = require('path');

//seed database with cars sample data from json file
const seedProducts = async () => {
    try {
        // Connect to MongoDB server
        await mongoose.connect('mongodb://mongo:27017/mongo', { useNewUrlParser: true, useUnifiedTopology: true });

        const productDataPath = path.resolve(__dirname, './laptops.json');
        const productData = await fs.readFile(productDataPath);
        const seedProducts = JSON.parse(productData);

        await Laptop.insertMany(seedProducts);
        console.log('Products added');

        // Count the number of documents in the Laptop collection
        const count = await Laptop.countDocuments({});
        console.log(`There are ${count} documents in the Laptop collection.`);

        // Close the connection
        await mongoose.connection.close();
    }
    catch (err) {
        console.error('Not possible to read and/or seed data.', err);
    }
}

seedProducts();