const http = require('http')
const path = require('path')
const fs = require('fs')
const PORT = 7000;
const app = http.createServer((req, res) => {
    console.log(req.url);
    switch (req.url) {
        case '/':
            var filepath = path.join(__dirname, 'index.html')
            fs.readFile(filepath, (err, data) => {
                if (err) {
                    res.end(err, '<h1>Hi World</h1>')
                }
                else {
                    res.end(data)
                }
            })
            break;
        case '/about':
            filepath = path.join(__dirname, 'about.html')
            fs.readFile(filepath, (err, data) => {
                if (err) {
                    res.end(err, '<h1>Hi World</h1>')
                }
                else {
                    res.end(data)
                }
            })
            break;
        default:
            filepath = path.join(__dirname, 'error.html')
            fs.readFile(filepath, (err, data) => {
                if (err) {
                    res.end(err, '404 Error found')
                }
                else {
                    res.end(data)
                }
            })
    }

})
app.listen(PORT, () => console.log(`http://localhost:${PORT}/`))