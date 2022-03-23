const { Schema, model } = require('mongoose');

class Product {
    contructor() {
        const ProductsSchema = new Schema({
            title: {type: String, required: true, max: 255},
            code: {type: Number, required: true, max: 5, default: Math.floor((Math.random() * (99999 - 1)) + 1)},
            price: {type: Number, required: true, max: 100},
            thumbnail: {type: String, required: true, max: 255},
            stock: { type: Number, default: 0}
        }, {
            timestamps: { createdAt: true, updatedAt: true }
        });

        this.model = model('Products', ProductsSchema);    
    }

    async model() {
        console.log(this.model);
    };

    async create(obj) {
        // == db.product.insertOne({}) en mongosh
        const product = await this.model.create(obj);
        console.log(JSON.stringify(product, null, 2));
        return product;
    }

    async getAll() {
        const products = await this.model.find();
        console.log(`Productos en DB: ${products.length}`);
        return products;
    }
}

module.exports = new Product();