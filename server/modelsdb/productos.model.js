const { Schema, model } = require('mongoose');

class Product {
    constructor() {
        this.schema = new Schema({
            title: {type: String, required: true, max: 255},
            code: {type: Number, required: true, default: Math.floor((Math.random() * (99999 - 1)) + 1)},
            price: {type: Number, required: true},
            thumbnail: {type: String, required: true, max: 255},
            stock: { type: Number, default: 0}
        }, {
            timestamps: { createdAt: true, updatedAt: true }
        });

        this.model = model('Products', this.schema);    
    }

    async create(obj) {
        // == db.product.insertOne({}) en mongosh
        const product = await this.model.create(obj);
        console.log(JSON.stringify(product, null, 2));
        return product;
    }

    async getAll() {
        const products = await this.model.find({}, null, {sort: {title: 1}});
        console.log(`Productos en DB: ${products.length}`);
        return products;
    }

    async getById(id) {
        const product = await this.model.find({_id: id});
        console.log(`Finded product: ${product}`);
        return product;
    }

    async delete(id) {
        const deletedProduct = await this.model.findOne({_id: id});
        console.log(`Removed product: ${deletedProduct}`);
        const remove = await this.model.deleteOne({_id: id});
        return remove;
    }

    async update(id, obj) {
        const toUpdate = await this.model.findOne({_id: id}); 
        console.log(`Product to update: ${toUpdate}}`);
        const update = await this.model.updateOne({_id: id}, {$set: {...obj}});
        console.log(`Updated to: ${update}`)
        return update;
    }
}

module.exports = new Product();