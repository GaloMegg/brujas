const { getFirestore } = require('firebase-admin/firestore')

const db = getFirestore();

class Productos {
    constructor() {
        this.model = db.collection('bruja-store')
    }

    async create(obj) {
        const query = await this.model.get()
        const newProd = await query.doc().set({            
            timestamp: moment(Date.now()).format('DD/MM/YYYY'),
            code: Math.floor((Math.random() * (99999 - 1)) + 1),
            ...obj
        })

        return newProd
    }
}

module.exports = new Productos();