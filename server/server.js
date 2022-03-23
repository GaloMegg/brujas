const dotenv = require('dotenv').config();
const express = require('express')
const path = require('path')
const mongoose = require('mongoose');

const productsRouter = require('./routes/productos.router');
const carritoRouter = require('./routes/carrito.router');

const { SCHEMA, HOSTNAME, DATABASE, USER, OPTIONS, PASSWORD } = process.env;
const app = express();

const PORT = process.env.PORT || 8080;

// Mongo connection
const MONGODB_URI = `${SCHEMA}://${USER}:${PASSWORD}@${HOSTNAME}/${DATABASE}?${OPTIONS}`;

mongoose.connect(MONGODB_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true
})
    .then(() => console.log('Database is connected 🎉'))
    .catch(err => console.log(err));

// body middlewares
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use('/static', express.static(path.join(__dirname, 'public')))

app.use('/api/productos', productsRouter)
app.use('/api/carrito', carritoRouter)

const server = app.listen(PORT, () => console.log(`Listening on port: ${PORT}`))

server.on('error', (err) => console.log(err))