const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const doctorSchema = new Schema({
    first_name: {
        type: String
    },
    last_name: {
        type: String
    },
    professional_statement: {
        type: String
    },
    practicing_from: {
        type: Date
    },
    qualifications: [{
        type: Schema.Types.ObjectId,
        ref: 'Qualification'
    }],
    specializations:[{
        type: Schema.Types.ObjectId,
        ref: "Specialization"
    }]
},{
    timestamps: true
})

module.exports = new mongoose.model("Doctor", doctorSchema);