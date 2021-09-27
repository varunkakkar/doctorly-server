const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const appointmentStatusSchema = new Schema({
    status: {
        type: String
    }
},{timestamps: true});

module.exports = new mongoose.model("Appointment_Status", appointmentStatusSchema);