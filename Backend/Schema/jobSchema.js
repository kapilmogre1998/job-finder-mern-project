const mongoose = require('mongoose')

const jobSchema = new mongoose.Schema({
    companyName: {
        type: String,
        required: true
    },
    logoUrl: {
        type: String,
        required: false
    },
    position: {
        type: String,
        required: true
    },
    salary: {
        type: Number,
        required: true
    },
    type: {
        type: String,
        required: true,
        enum: ['full-time', 'part-time', 'internship', 'remote', 'hybrid', 'contractual']
    },
    location: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    aboutCompany: {
        type: String,
        required: false
    },
    skills: [{
        type: [String],
        required: true
    }],
    addInfo: {
        type: String,
        required: false
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User' // Reference to the User model
    }
})

module.exports = mongoose.model("Job", jobSchema);