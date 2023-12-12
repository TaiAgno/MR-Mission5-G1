const mongoose = require('mongoose');

const laptopSchema = new mongoose.Schema({
        brand: { type: String },
        model: { type: String },
        screenSize: { type: Number },
        screenResolution: { type: String },
        processor: { type: String },
        ram: { type: Number },
        storage: { type: String },
        gpuModel: { type: String },
        operatingSystem: { type: String },
        moreSpecs: { type: String },
        image: { type: String }
      });

const Laptop = mongoose.model('Laptop', laptopSchema);

module.exports = Laptop;
      