const dotenv = require('dotenv').config();
const express = require('express')
const { initializeApp, applicationDefault } = require('firebase-admin/app')
const path = require('path')
const mongoose = require('mongoose')

const serviceAccount = require('./database/bruja-store-firebase-adminsdk-et1o8-79a423f79a.json')
const productsRouter = require('./routes/productos.router');
const carritoRouter = require('./routes/carrito.router');

const { SCHEMA, HOSTNAME, DATABASE, USER, OPTIONS, PASSWORD } = process.env;
const app = express();

const PORT = process.env.PORT || 8080;

// MONGO CONNECTION
const MONGODB_URI = `${SCHEMA}://${USER}:${PASSWORD}@${HOSTNAME}/${DATABASE}?${OPTIONS}`;

mongoose.connect(MONGODB_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true
})
    .then(() => {
        // body middlewares
        app.use(express.json())
        app.use(express.urlencoded({ extended: true }))
        app.use('/static', express.static(path.join(__dirname, 'public')))
        
        app.use('/api/productos', productsRouter)
        app.use('/api/carrito', carritoRouter)
        
        const server = app.listen(PORT, () => console.log(`Listening on port: ${PORT}`))
        
        server.on('error', (err) => console.log(err))
        console.log('🍃 MONGODB CONNECTED 🍃');
    })
    .catch(err => console.log(err));

// FIREBASE CONNECTION

initializeApp({
    credential: applicationDefault()
});

console.log(`🔥 FIREBASE CONNECTED 🔥`);