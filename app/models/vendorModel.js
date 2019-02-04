'use strict';

const mongoose = require('mongoose');
var Schema = mongoose.Schema;
const VendorSchema = mongoose.Schema({
    RestaruntId: String,
    RestaruntName: String,
    Description: String,
    Address: String,
    ContactNumber: String,
    GSD_id: String,
    AuditUser: String,
    ActiveStatus: Boolean,
}, {
        timestamps: true
    });

module.exports = mongoose.model('Vendor', VendorSchema);