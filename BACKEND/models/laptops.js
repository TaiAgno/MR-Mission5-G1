const mongoose = require('mongoose');

const performanceSchema = new mongoose.Schema({
  processor: { type: String },
  graphics: { type: String },
  chipset: { type: String },
  memory: { type: String },
  memory_slots: { type: String },
  storage: { type: String },
  storage_support: { type: String },
  card_reader: { type: String },
  optical: { type: String },
  audio: { type: String },
  speaker: { type: String },
  camera: { type: String },
  microphone: { type: String },
  battery: { type: String },
  power_supply: { type: String }
});

const designSchema = new mongoose.Schema({
  display: { type: String },
  touchscreen: { type: String },
  keyboard: { type: String },
  case_color: { type: String },
  surface_treatment: { type: String },
  case_material: { type: String },
  dimensions: { type: String },
  weight: { type: String }
});

const softwareSchema = new mongoose.Schema({
  operating_system: { type: String },
  bundled_software: { type: String }
});

const connectivitySchema = new mongoose.Schema({
  ethernet: { type: String },
  WLAN: { type: String },
  ports: { type: String },
  security_chip: { type: String },
  fingerprint_reader: { type: String },
  physical_locks: { type: String },
  other_security: { type: String }
});

const reviewSchema = new mongoose.Schema({
  user: { type: String },
  comment: { type: String },
  rating: { type: Number }
});

const laptopSchema = new mongoose.Schema({
  brand: { type: String, required: true },
  model: { type: String, required: true },
  screen_size: { type: String, required: true },
  screen_resolution: { type: String, required: true },
  cpu: { type: String, required: true },
  ram: { type: String, required: true },
  storage: { type: String, required: true },
  gpu_model: { type: String, required: true },
  operating_system: { type: String, required: true },
  rating: { type: Number, required: true },
  reviews: { type: [reviewSchema], default: [] },
  price: { type: String, required: true },
  card_image: { type: String, required: true },
  images: { type: [String], default: [] },
  tags: { type: [String], default: [] },
  specs_performance: { type: [performanceSchema] },
  specs_design: { type: [designSchema] },
  specs_software: { type: [softwareSchema] },
  specs_connectivity: { type: [connectivitySchema] },
});

const Laptop = mongoose.model('Laptop', laptopSchema);

module.exports = Laptop;
