'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var StudentSchema = new Schema({
    firstName: {
        type: String,
        required: 'Enter your First Name'
    },
    lastName: {
        type: String,
        required: 'Enter your Last name'
    },
    faculty: {
        type: String,
        required: 'Enter your faculty'
    },
    department: {
        type: String,
        required: 'Enter your department'
    },
    level: {
        type: Number,
        required: 'Kindly enter your full name'
    },
    session: {
        type: String,
        required: 'Enter Session eg. current year of study'
    },
    email: {
        type: String,
        required: 'Kindly enter your full name'
    },
    address: {
        type: String,
        required: 'Enter your Residential address'
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    status: {
        type: Boolean,
        default: true
    }
});

module.exports = mongoose.model('Student', StudentSchema);