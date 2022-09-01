const http = require('http')

const server = http.createServer((req, res) => {
    console.log(req.url)

    if (req.method === 'GET') {
        res.writeHead(200, {
            'Content-type': 'text/html'
        })
        // writeHead(a, b); a - status, b - header
        res.end(`
        <h1>Form</h1>
        <form method="post" action="/">
        <input name="title" type="text" />
        <button type="submit">Send</button>
        </form>
        `)
    }
})

server.listen(3000, () => {
    console.log('Server is running...')
})