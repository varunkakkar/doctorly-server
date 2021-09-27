const mongoose = require('mongoose');

const Schema = mongoose.Schema;


const qualificationSchema = new Schema({
    doctor: {
        type: Schema.Types.ObjectId,
        ref: 'Doctor'
    },
    qualification_name: {
        type: String
    },
    institute_name: {
        type: String
    },
    procurement_year: {
        type: Date
    }
},{
    timestamps: true
})

module.exports = new mongoose.model("Qualification", qualificationSchema);