const express = require('express')
// const path = require('path')
const exphbs = require('express-handlebars')
const homeRoutes = require('./routes/home')
const aboutRoutes = require('./routes/about')
const productsRoutes = require('./routes/products')
const addRoutes = require('./routes/add')

const app = express()

const hbs = exphbs.create({
    defaultLayout: 'main',
    extname: 'hbs'
})

app.engine('hbs', hbs.engine) //register the engine
app.set('view engine', 'hbs') //use the engine
app.set('views', 'views') //set html folder


app.use(express.static("public")) //register the public folder
app.use(express.urlencoded({extended: true}))

app.use("/", homeRoutes)
app.use('/about', aboutRoutes)
app.use('/products', productsRoutes)
app.use('/add', addRoutes)

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}...`)
})