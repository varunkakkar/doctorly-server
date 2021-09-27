const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const reviewSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    doctor: {
        type: Schema.Types.ObjectId,
        ref: "Doctor"
    },
    is_review_anonymous: {
        type: Boolean,
    },
    wait_time_rating: {
        type: Number
    },
    manner_rating: {
        type: Number
    },
    overall_rating: {
        type: Number
    },
    review: {
        type: String
    },
    is_doctor_recommended: {
        type: Boolean
    },
    review_date: {
        type: Date
    }
},{timestamps: true})

module.exports = new mongoose.model("Review", reviewSchema);