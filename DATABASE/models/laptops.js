const mongoose = require('mongoose');

const laptopSchema = new mongoose.Schema({
  brand: { type: String },
  model: { type: String },
  screen_size: { type: Number },
  screen_resolution: { type: String },
  processor: { type: String },
  ram: { type: Number },
  storage: { type: String },
  gpu_model: { type: String },
  operating_system: { type: String },
  more_specs: { type: String },
  image: { type: String }
});

const Laptop = mongoose.model('Laptop', laptopSchema);

module.exports = Laptop;
      