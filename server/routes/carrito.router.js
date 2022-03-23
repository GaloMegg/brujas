const { Router } = require('express')
const cart = require('../controllers/carrito.controller')

const router = Router()

router.post('/', cart.createCart)

router.delete('/:id', cart.emptyCart)

router.get('/:id/productos', cart.listProducts)

router.post('/:id/productos', cart.listProducts)

router.delete('/:id/productos/:prod', cart.deleteFromCart)

module.exports = router