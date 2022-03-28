const { Router } = require('express')
const cart = require('../controllersdb/carrito.controller')

const router = Router()

router.post('/', cart.createCart)

router.delete('/:id', cart.emptyCart)

router.get('/:id/productos', cart.listProducts)

router.post('/:id/productos', cart.addToCart)

router.delete('/:id/productos/:prod', cart.removeFromCart)

module.exports = router