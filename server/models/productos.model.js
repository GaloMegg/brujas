const fs = require('fs').promises

class Productos {
    constructor(filename) {
        this.filename = filename
    }

    async length() { 
        const file = await fs.readFile(this.filename, 'utf-8')
        const parsedData = JSON.parse(file)
        const length = parsedData.length
        return length
    }

    async getAll() {
        try {
            if(this.length() !== 0) {
                const file = await fs.readFile(this.filename, 'utf-8')
                const parsedData = JSON.parse(file)
                return parsedData
            } else {
                const noData = {
                    err: 'No data available'
                }
                return noData
            }
            
        } catch(err) {
            console.log(`An error occurred: ${err}`)
        }      
    }

    async getById(id) {
        try {
            const file = await fs.readFile(this.filename, 'utf-8')
            const parsedData = JSON.parse(file)
            const i = parsedData.find(i => i.id === id)
            return i
        } catch(err) {
            console.log(`An error occurred: ${err}`)
        }
    }

    async addProduct(obj) {
        try {
            const file = await fs.readFile(this.filename, 'utf-8')
            const data = JSON.parse(file)
            const lastItem = data[data.length - 1]

            data.push({
                id: lastItem.id + 1, 
                ...obj
            })
            await fs.writeFile(this.filename, JSON.stringify(data, null, 2))  
            return data        
        } catch (err) {
            console.log(`The file couldn't be rewritten`)
        }
    }
}

module.exports = Productos