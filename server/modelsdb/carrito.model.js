const mongoose = require('mongoose');

class Cart {
    constructor() {
        const CartSchema = new mongoose.Schema({
            productos:{
                title: {type: String, required: true, max: 255},
                code: {type: Number, required: true, max: 5, default: Math.floor((Math.random() * (99999 - 1)) + 1)},
                price: {type: Number, required: true, max: 100},
                thumbnail: {type: String, required: true, max: 255},
                stock: { type: Number, default: 0}
            }
        })
    }
};