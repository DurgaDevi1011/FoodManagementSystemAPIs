'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var OrderSchema = new Schema({
    Date: Date,
    Time: String,
    Name: String,
    Amount: Number,
    Items: [{ type: Schema.ObjectId, ref: 'Order' }],
    ItemCount: Number,
    User: { type: Schema.ObjectId, ref: 'User' }
},
    {
        timestamps: true
    });


module.exports = mongoose.model('Order', OrderSchema);
