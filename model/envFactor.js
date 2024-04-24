const mongoose = require("mongoose");

const envFactorSchema = new mongoose.Schema({
    sensorID: {
        type: String,
        required: true,
        unique: true,
    },
    temperature: {
        type: Number,
        required: true,
    },
    humidity: {
        type: Number,
        required: true,
    },
    concentration: {
        type: Number,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    location: {
        type: String,
        required: true,
    },
});

module.exports = mongoose.model("envFactor", envFactorSchema);
