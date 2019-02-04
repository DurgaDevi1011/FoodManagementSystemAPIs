'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var ItemsSchema = new Schema({
    image: String,
    title: String,
    description: String,
    price: { type: Number },
    isHotel: { type: Boolean, default: false },
    isSnack: { type: Boolean, default: false }
},
    {
        timestamps: true
    });


module.exports = mongoose.model('Items', ItemsSchema);
