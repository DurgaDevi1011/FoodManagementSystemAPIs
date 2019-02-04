'use strict';

const mongoose = require('mongoose');
var Schema = mongoose.Schema;   
var UserSchema = new Schema({
    Name: String,
    Email: { type: String, lowercase: true },
    ContactNumber: String,
    Role: {
        type: String,
        default: 'user'
    },
    AuditUser: String,
    ActiveStatus: Boolean,
}, {
        timestamps: true
    });

module.exports = mongoose.model('User', UserSchema);
