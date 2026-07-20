const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        return res.end('welcome to our home page')
    }
    if (req.url === '/about') {
        return res.end('this is our about page')
    }
    res.end(`
        <h1>Oops!</h1>
        <p>We can't seem to find the page you are looking for</p>
        <a href='/'>Home page</a>
        `)
})
server.listen(4000)