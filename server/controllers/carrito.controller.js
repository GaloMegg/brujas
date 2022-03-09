const Carrito = require('../models/carrito.model')
const cart = new Carrito()

module.exports = {

    createCart: async (req, res) => {
        const { body } = req
        console.log(body)
        
        await cart.createCart(body)
        res.sendStatus(200)
    },

    emptyCart:  async (req, res) => {7
        const { id } = req.params
    
        await cart.deleteCart(id)
        res.sendStatus(200)
    },

    listProducts:  async (req, res) => {
        const { id } = req.params
    
        await cart.getCart(id)
        res.send(cart)
    },

    addToCart: async (req, res) => {
        const { id } = req.params
        const { body } = req
    
        try {
            await cart.addProduct(id, body)
            res.sendStatus(201) // HTTP Created
        } catch(err) {
            if(err.message === "Cart does not exists") {
                res.sendStatus(404)
            } else {
                res.sendStatus(500) // HTTP Internal Server Error
            }
        }
    },

    deleteFromCart: async (req, res) => {
        const { id, prod } = req.params
    
        await cart.deleteProduct(id, prod)
    
        res.sendStatus(200)
    }
}