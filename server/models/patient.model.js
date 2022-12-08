const mongoose = require("mongoose");

const Patient = mongoose.model(
  "Patient",
  new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    IDcard: String,
    age: Number,
    phone: Number,
    nextRDV: Date,
    nextRDV_2: String,
    medicament: String,
    tests: String,
    notes: String,
    diabete: Boolean,
    Asthma: Boolean,
    heart: Boolean,
    cancer: Boolean,
  })
);

module.exports = Patient;
