const { Router } = require('express')
const Product = require('../models/product')
const router = Router()

router.get('/', async (req, res) => {
    const products = await Product.getAll()
    res.render('products', {
        title: "Products",
        isProducts: true,
        products
    })
})

router.get('/:id', async (req, res) => {
    const product = await Product.getById(req.params.id)
    res.render('product', {
        layout: 'empty',
        title: `${product.title}`,
        product
    })
})

module.exports = router