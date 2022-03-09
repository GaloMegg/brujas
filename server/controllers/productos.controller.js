const Producto = require('../models/productos.model')
const product = new Producto('./database/productos.json')
const fs = require('fs').promises
const moment = require('moment')

const isAdmin = true;
const getAll = product.getAll()

module.exports = {
    getAll: (req, res) => {
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
    },

    getById: (req, res) => {
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
    },

    addProduct: (req, res) => {
        if(isAdmin) {
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
        } else {
            res.status(403).send({
                err: -1, 
                description: '/api/productos POST is only available for admins'
            })
        }        
    }, 

    updateProduct: (req, res) => {
        if(isAdmin) {
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
                                timestamp: `Updated on date: ${moment(Date.now()).format('DD/MM/YYYY')}`,
                                code: elem.code,
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
        } else {
            res.status(403).send({
                err: -1, 
                description: '/api/productos PUT is only available for admins'
            })
        }
    },

    deleteProduct: (req, res) => {
        if(isAdmin) {
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
        } else {
            res.status(403).send({
                err: -1, 
                description: '/api/productos DELETE is only available for admins'
            })
        }        
    }
}