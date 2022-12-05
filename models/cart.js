const path = require('path')
const fs = require('fs')
const { countReset } = require('console')

const p = path.join(
    path.dirname(process.mainModule.filename),
    'data',
    'cart.json'
)

class Cart {
    static async add(product) {
        const cart = await Cart.fetch()
        console.log(cart)

        const index = cart.products.findIndex(c => c.id === product.id)
        const candidate = cart.products[index]

        if (candidate) {
            // the product already in the basket
            candidate.count++
            cart.products[index] = candidate
        } else {
            // there is no the product in the basket
            product.count = 1
            cart.products.push(product)
        }

        cart.price += +product.price

        return new Promise((resolve, reject) => {
            fs.writeFile(p, JSON.stringify(cart), err => {
                if (err) {
                    reject(err)
                } else {
                    resolve()
                }
            })
        })
    }

    static async remove(id) {
        const cart = await Cart.fetch()

        const index = cart.products.findIndex(c => c.id === id)
        const product = cart.products[index]

        if (product.count === 1){
            //remove
            cart.products = cart.products.filter(c => c.id !== id)
        } else {
            // change count
            cart.products[index].count--
        }

        cart.price -= product.price

        return new Promise((resolve, reject) => {
            fs.writeFile(p, JSON.stringify(cart), err => {
                if (err) {
                    reject(err)
                } else {
                    resolve(cart)
                }
            })
        })
    }

    static async fetch() {
        return new Promise((resolve, reject) => {
            fs.readFile(p, 'utf-8', (err, content) => {
                if (err) {
                    reject(err)
                } else {
                    resolve(JSON.parse(content))
                }
            })
        })
    }
}

module.exports = Cart