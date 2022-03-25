const mongoose = require('mongoose');
const childSchema = require('./productos.model');

const children = childSchema.schema;

class Cart {
    constructor() {
        const CartSchema = new mongoose.Schema({
            products: [children]
        }, {
            timestamps: true
        });

        this.model = mongoose.model('Cart', CartSchema);
        this.data = [];
    }

    async createCart(cart) {
        cart.title !== undefined ? this.data.push(cart) : null;
        return await this.model.create({products: this.data});
    }

    async getCartById(id) {
        const cart = await this.model.find({_id: id})
        if(!cart) {
            throw new Error("Cart does not exists")
        } else {
            console.log(`Cart: ${cart}`)
            return cart
        }
    }

    async addToCart(id, body) {
        const added = await this.model.updateOne({ id: id }, { $push: { products: body }})
        return added
    }

    async emptyCart(id, prodId) {        
        let product = parseInt(prodId);
        await this.model.updateOne({ id: id }, { $pull: { products: { id: product }}});
    }
};

module.exports = new Cart();