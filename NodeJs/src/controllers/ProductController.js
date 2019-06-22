const mongoose = require('mongoose')

const Products = mongoose.model('Product')

module.exports = {
    async index(req, res) {
        const products = await Products.find()

        return res.json(products)
    }, 
    async store(req, res) {
        const product = await Products.create(req.body)

        return res.json(product)
    } 
}