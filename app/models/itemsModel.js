'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var ItemsSchema = new Schema({
    ItemImage: String,
    Title: String,
    Description: String,
    Price: { type: Number },
    isHotel: { type: Boolean, default: false },
    isSnack: { type: Boolean, default: false }
},
    {
        timestamps: true
    });


module.exports = mongoose.model('Items', ItemsSchema);
