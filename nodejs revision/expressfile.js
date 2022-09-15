const express = require('express')

const port = 3000
const path = require('path')
const app = express()

const dirpath = path.join(__dirname, 'public')
console.log(dirpath)
// app.use(express.static(dirpath));
app.use(express.json());



app.get('/', (req, res) => {
    // console.log('name is sanket', req.query.name)
    // /? name='sanket'
    // res.send('Hello World!')
    res.sendFile(`${dirpath}/home.html`)
    console.log(dirpath);
})
route.get('/about', (req, res) => {
    res.sendFile(`${dirpath}/index.html`)
})
app.get('*', (req, res) => {
    res.sendFile(`${dirpath}/404.html`)
})




// 
app.listen(port, () => console.log(`Example app listening on port ${port}!`))
