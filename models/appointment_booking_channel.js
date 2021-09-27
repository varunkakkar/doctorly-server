const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const appointmentBookingChannelSchema = new Schema({
    appointment_booking_channel_name: {
        type: String
    }
}, { timestamps: true })

module.exports = new mongoose.model("Appointment_Booking_Channel", appointmentBookingChannelSchema);
