'use strict';

const mongoose = require('mongoose');
var Schema = mongoose.Schema;   
var UserSchema = new Schema({
    name: String,
    email: { type: String, lowercase: true },
    contactNumber: String,
    role: {
        type: String,
        default: 'user'
    },
    AuditUser: String,
    ActiveStatus: Boolean,
}, {
        timestamps: true
    });

module.exports = mongoose.model('User', UserSchema);