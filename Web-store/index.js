const express = require('express')
// const path = require('path')
const exphbs = require('express-handlebars')

const app = express()

const hbs = exphbs.create({
    defaultLayout: 'main',
    extname: 'hbs'
})

app.engine('hbs', hbs.engine) //register the engine
app.set('view engine', 'hbs') //use the engine
app.set('views', 'views') //set html folder


app.use(express.static("public")) //register the public folder

app.get('/', (req, res) => {
    res.render('index', {
        title: "Home page",
        isHome: true
    })
    // res.sendFile(path.join(__dirname, 'views', 'index.html'))
})

app.get('/products', (req, res) => {
    res.render('products', {
        title: "Products",
        isProducts: true
    })
})

app.get('/propositions', (req, res) => {
    res.render('propositions', {
        title: "Propositions",
        isPropositions: true
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: "About",
        isAbout: true
    })
})

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}...`)
})