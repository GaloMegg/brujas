const productModel = require('../modelsdb/productos.model');

const isAdmin = true;

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
            if(isAdmin) {
                const product = await productModel.create(body);
                res.status(201).send(product);
            } else {
                res.status(403).send({
                    err: -1, 
                    description: '/api/productos POST is only available for admins'
                })
            }      
        } catch(err) {
            console.log(err);
            res.status(500).send({
                error: err.message
            })
        }
    },

    getById: async (req, res) => {
        try {
            // pasar el ObjectId del producto
            const { id } = req.params;
            const product = await productModel.getById(id);
            res.status(201).send(product); 
        } catch(err) {
            console.log(err);
            res.status(500).send({
                error: err.message
            })
        }
    },

    delete: async (req, res) => {
        try {
            if(isAdmin) {
                const { id } = req.params;
                const product = await productModel.delete(id);
                const clearCollection = await productModel.getAll();
                res.status(201).send(
                    `New collection: 
                        ${clearCollection}
                    `
                    );
            } else {
                res.status(403).send({
                    err: -1, 
                    description: '/api/productos DELETE is only available for admins'
                })
            }        
        } catch(err) {
            console.log(err);
            res.status(500).send({
                error: err.message
            })
        }
    },

    update: async (req, res) => {
        try {
            if(isAdmin) {
                const { body } = req;
                const { id } = req.params;
                const product = await productModel.update(id, body);
                const updated = await productModel.getAll();
                res.status(201).send(
                    `Updated collection: 
                        ${updated}
                    `
                );
            } else {
                res.status(403).send({
                    err: -1, 
                    description: '/api/productos PUT is only available for admins'
                })
            }
        } catch(err) {
            console.log(err);
            res.status(500).send({
                error: err.message
            })
        }
    }
}