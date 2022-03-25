const cart = require('../modelsdb/carrito.model');

const isAdmin = true;

module.exports = {
    createCart: async (req, res) => {
        try {
            const { body } = req
            console.log(body)
            
            await cart.createCart(body)
            res.status(200).send(body)
        } catch(err) {
            res.status(500).send({
                error: err.message
            })
        }
    },

    emptyCart: async (req, res) => {
        try {
            const { id } = req.params;
            const removed = await cart.emptyCart(id);
            console.log(`Removed cart: ${removed}`);
    
            res.status(200).send(`
                Removed cart: 
                    ${removed}
            `)
        } catch(err) {
            res.status(500).send({
                error: err.message
            })
        }
    },

    listProducts: async (req, res) => {
        try {
            const { id } = req.params;
            const data = await cart.getCartById(id);
            res.status(200).send(data) 
        } catch(err) {
            res.status(500).send({
                error: err.message
            })
        }
    },

    addToCart: async (req, res) => {
        try {
            const { id } = req.params
            const { body } = req
            const added = await cart.addToCart(id, {...body})
            res.status(200).send(added)
        } catch(err) {
            res.status(500).send({
                error: err.message
            })
        }
    },

    removeFromCart: async (req, res) => {
        const { id, prodId } = req.params;
        await cart.emptyCart(id, prodId);
        res.status(200).send(`Product removed succesfully`)
    }
};