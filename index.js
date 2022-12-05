const path = require('path')
const express = require('express')
const exphbs = require('express-handlebars')
const homeRoutes = require('./routes/home')
const aboutRoutes = require('./routes/about')
const addRoutes = require('./routes/add')
const cartRoutes = require('./routes/cart')
const productsRoutes = require('./routes/products')

const app = express()

const hbs = exphbs.create({
    defaultLayout: 'main', //layouts/main.hbs
    extname: 'hbs'
})

const PORT = process.env.POSRT || 3000

app.engine('hbs', hbs.engine)
// register the hbs object with exname 'hbs' as an engine
app.set('view engine', 'hbs')
// set the engine registered to use
app.set('views', 'views')
// set the views folder for the views handlebars option
app.use(express.static(path.join(__dirname, 'public')))
// set the public folder as a folder with project static data
app.use(express.urlencoded({extended: true}))
// set the public folder as a folder with project static data
app.use('/', homeRoutes)
app.use('/add', addRoutes)
app.use('/about', aboutRoutes)
app.use('/products', productsRoutes)
app.use('/cart', cartRoutes)

app.listen(PORT, ()=> {
    console.log(`Server is running on port ${PORT}`)
})