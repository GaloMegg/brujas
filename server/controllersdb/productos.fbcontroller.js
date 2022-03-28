const model = require('../modelsdb/producto.fbmodel')

module.exports = {
    create: async (req, res) => {
        try {
            const product = await model.create()
            res.status(200).send(product)
        } catch(err) {
            res.status(500).send({
                error: err.message
            })
        }
    }
}