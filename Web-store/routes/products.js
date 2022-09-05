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

module.exports = router