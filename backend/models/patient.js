const mongoose = require("mongoose");

const patientSchema = mongoose.Schema({
  patientRegistrationNumber: { type: Number, required: true },
  name: {
    firstname: String,
    lastname: String,
  },
  gender: String,
  address: String,
  dob: Date,
  city: String,
  district: String,
  Aadhar: String,
  maritalStatus: String,
  contactNumber: Number,
  email: String,
  guardian: {
    guardianType: String,
    firstname: String,
    lastname: String,
    gender: String,
    Aadhar: String,
    contactNumber: Number,
  },
});

module.exports = mongoose.model("Patient", patientSchema);
