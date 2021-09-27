const mongoose = require('mongoose');

const Schema = new mongoose.Schema

let timezones = require('../data/timezones.json').map(t => {
    return t.text
})

const userSchema = new Schema({
    username: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
    },
    phone: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        enum: ["Male", "Female", "Other"]
    },
    blood_group: {
        type: String,
        enum: ["O+", "A+", "B+", "O-", "A-", "B-", "AB+", "AB-"]
    },
    timezone: {
        type: String,
        enum: timezones
    },
    address: {
        house_no: {
            type: String
        },
        colony: {
            type: String
        },
        city: {
            type: String
        },
        state: {
            type: String
        },
        country: {
            type: String
        },
        pincode: {
            type: String
        }
    },
    extra: {
        phone: {
            type: String
        },
        language: {
            type: String
        }
    }
})

module.exports = new mongoose.model("User", userSchema)