const productModel = require('../modelsdb/productos.model');

module.exports = {
    getAll: async (req, res) => {
        try {
            const products = await productModel.getAll();
            res.send(products);
        } catch(err) {
            res.status(500).send({
                error: err.message
            })
        }
    },

    create: async (req, res) => {
        const { body } = req;
        try {
            const product = await productModel.create(body);
            res.status(201).send(product);
        } catch(err) {
            console.log(err);
            res.status(500).send({
                error: err.message
            })
        }
    },

    model: async (req, res) => {
        try {
            return await productModel.model();
        } catch(err) {
            console.log(err);
            res.status(500).send({
                error: err.message
            })
        }
    }
}