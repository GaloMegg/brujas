const { Router } = require('express')
const Carrito = require('../models/carrito.model')

const router = Router()
const cart = new Carrito()

// estructura del producto: 
// id, timestamp, nombre, descripcion, código, foto (url), precio, stock.

router.post('/', async (req, res) => {
    const { body } = req
    console.log(body)
    
    await cart.createCart(body)
    res.sendStatus(200)
})

router.delete('/:id', async (req, res) => {7
    const { id } = req.params

    await cart.deleteCart(id)
    res.sendStatus(200)
})

router.get('/:id/productos', async (req, res) => {
    const { id } = req.params

    await cart.getCart(id)
    res.send(cart)
})

router.post('/:id/productos', async (req, res) => {
    const { id } = req.params
    const { body } = req

    try {
        // Validar que el producto ya exista
        await cart.addProduct(id, body)
        res.sendStatus(201) // HTTP Created
    } catch(err) {
        if(err.message === "Cart does not exists") {
            res.sendStatus(404)
        } else {
            res.sendStatus(500) // HTTP Internal Server Error
        }
    }
})

router.delete('/:id/productos/:prod', async (req, res) => {
    const { id, prod } = req.params

    await cart.deleteProduct(id, prod)

    res.sendStatus(200)
})


module.exports = router