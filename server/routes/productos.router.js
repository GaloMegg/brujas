const { Router } = require('express')
const fs = require('fs')

const router = Router()
// const products = require('../controllers/productos.controller')
const products = require('../controllersdb/productos.controller');

// endpoint de prueba
router.get('/', products.getAll)

// Trae un producto según su ID (available 4 users & admins)
router.get('/:id', products.getById)

// Permite agregar un producto (admin)
router.post('/', products.create)

// Permite actualizar un producto (admin)
router.put('/:id', products.update)


// Permite eliminar un producto (admin)
router.delete('/:id', products.delete)

module.exports = router