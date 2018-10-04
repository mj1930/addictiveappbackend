const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Users = Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    number: {
        type: String,
        required: true
    },
    course_name: {
        type: String,
        required: true
    },
    course_year: {
        type: String,
        required: true
    },
    college_name: {
        type: String,
        required: true
    },
    branch_name: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
})

module.exports = mongoose.model('users', Users);