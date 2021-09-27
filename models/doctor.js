const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const doctorSchema = new Schema({
    name: {
        type: String
    },
    degrees: [{
        name: String
    }],
    title: [{
        name: String
    }],
    experience: [{
        type: String,
        duration: String
    }],
    medical_registration: {
        type: Boolean,
    },
    description: {
        type: String,
    }
})

module.exports = new mongoose.model("Doctor", doctorSchema);