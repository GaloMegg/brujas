const express = require('express')
const path = require('path')
const productsRouter = require('./routes/productos.router')
const carritoRouter = require('./routes/carrito.router')
const app = express()

const PORT = process.env.PORT || 8080;

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use('/static', express.static(path.join(__dirname, 'public')))

app.use('/api/productos', productsRouter)
app.use('/api/carrito', carritoRouter)

const server = app.listen(PORT, () => console.log(`Listening on port: ${PORT}`))

server.on('error', (err) => console.log(err))