const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const specializationSchema = new Schema({
    specialization_name: {
        type: String
    }
},{timestamps: true});

module.exports = new mongoose.model("Specialization", specializationSchema);