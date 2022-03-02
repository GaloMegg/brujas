const { Router } = require('express')
const Producto = require('../models/productos.model')
const fs = require('fs')

const router = Router()
const product = new Producto('./database/productos.json')
const getAll = product.getAll()

// endpoint de prueba
router.get('/', (req, res) => {

    getAll 
        .then(data => {
            if(data) {
                res.send(data)
            } else {
                res.status(404).send({
                    err: `Couldn't find products`
                })
            }
        })
})

router.get('/:id', (req, res) => {
    const { id } = req.params
    const getById = product.getById(Number(id))

    getById
        .then(data => {
            if(data) {
                res.send(data)
            } else {
                res.status(404).send({ 
                    err: `Couldn't find the product`
                })
                return
            }
        })
        .catch(err => console.log(err))
})

router.post('/', (req, res) => {
    const newProd = req.body
    const addProduct = product.addProduct(newProd)

    addProduct 
        .then(data => {
            if(data) {
                res.send(data)
            } else {
                res.status(404).send({
                    err: `Couldn't add the product`
                })
            }
        })
})

router.put('/:id', (req, res) => {
    const update = req.body
    const { id } = req.params

    getAll
        .then(data => {
            const elem = data.find(elem => data.indexOf(elem) === Number(id -1))
            const index = elem.id - 1
            if(data) {
                if(data) {
                    data[index] = {
                        id: elem.id,
                        ...update
                    }
                }
                fs.writeFile('./database/productos.json', JSON.stringify(data, null, 2), () => console.log('File written successfully'))
                res.send(data[index])
            } else {
                res.status(404).send({ 
                    err: `Couldn't find the product`
                })
                return
            }
        })
        .catch(err => console.log(err))
})

router.delete('/:id', (req, res) => {
    const { id } = req.params

    getAll 
        .then(data => {
            const elem = data.find(elem => data.indexOf(elem) === Number(id -1))
            const index = elem.id - 1
            if(data && elem) {
                data.splice(index, 1)
                fs.writeFile('./database/productos.json', JSON.stringify(data, null, 2), () => console.log('Product removed successfully'))
                res.send(data)
            } else {
                res.status(404).send({
                    err:`Couldn't remove product from database`
                })
            }
        })
})

module.exports = router