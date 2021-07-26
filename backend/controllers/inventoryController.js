const inventoryModel = require('../models/inventory.js')

const getInventory = async(req, res) => {
    const { userToken } = req

    const user = await inventoryModel.findOne({ username: userToken })

    if(!user) {
        return res.status(400).json({ message: 'Todavia no tienes un inventario' })
    }

    return res.json({ user })
}

const postInventory = async(req, res) => {
    const { reference, name, price } = req.body

    const inventory = await inventoryModel.findOne({ username: req.userToken })

    if(inventory) {
        let product = {
            reference,
            name,
            price
        }

        inventory.products.push(product)

        await inventoryModel.findOneAndUpdate({ username: req.userToken }, {
            products: inventory.products
        }, { useFindAndModify: false })

        return res.json({ message: 'Producto agregado' })
    } else {
        await inventoryModel.create({
            username: req.userToken,
            products: [
                {
                    reference,
                    name,
                    price
                }
            ]
        })

        return res.json({ message: 'Inventario creado' })
    }
}

module.exports = {
    getInventory,
    postInventory
}