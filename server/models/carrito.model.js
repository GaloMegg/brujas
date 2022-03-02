const path = require('path')
const fs = require('fs').promises

class Carrito {
    constructor() {
        this.path = path.join(__dirname, "../database/carrito.json")
        this.data = [] // carrito en memoria
        this.readCart()
    }

    async readCart() {
        this.data = JSON.parse(await (fs.readFile(this.path, "utf-8")))
    }

    async writeCart() {
        await fs.writeFile(this.path, JSON.stringify(this.data, null, 2))
    }

    async createCart(cart) {
        await this.readCart()
        cart.timestamp = Date.now()
        cart.id = this.data[this.data.length - 1].id + 1
        this.data.push(cart)
        await this.writeCart()
    }

    async getCart(id) {
        const cart = this.data.find(c => c.id == id)
        if(!cart) {
            throw new Error("Cart does not exists")
        }

        return cart
    }

    async addProduct(id, product) {
        await this.readCart()
        const cart = this.data.find(c => c.id == id)
        if(!cart) {
            throw new Error("Cart does not exists")
        }

        cart.productos.push(product)

        await this.writeCart()
    }

    async deleteProduct(id, idProd) {
        await this.readCart()
        const cart = this.getCart(id)

        // validar que el cart tenga productos y el id exista
        cart.productos = cart.productos.filter(p => p.id != idProd)

        await this.writeCart()
    }

    async deleteCart(id) {
        await this.readCart()
        const cart = this.getCart(id)

        cart = cart.filter(c => c.id != id)
        await this.writeCart()
    }
}

module.exports = Carrito;