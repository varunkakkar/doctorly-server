const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const appointmentSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    office: {
        type: Schema.Types.ObjectId,
        ref: "Office"
    },
    probable_start_time: {
        type: Date
    },
    actual_end_time: {
        type: Date
    },
    appointment_status: {
        type: Schema.Types.ObjectId,
        ref: "Appointment_Status"
    },
    appointment_taken_date: {
        type: Date
    },
    appointment_booking_channel: {
        type: Schema.Types.ObjectId,
        ref: "Appointment_Booking_Channel"
    }
},{timestamps: true})