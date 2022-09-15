const express = require('express');

const port = 3000
const path = require('path')
const app = express()
const reqFilter = require('./middleware/s1')

const route = express.Router();
const dirpath = path.join(__dirname, 'public')
console.log(dirpath)

route.use(reqFilter)
// app.use(express.static(dirpath));// when use res.sendFile that time not use this

// const reqFilter = (req, resp, next) => {
//     if (!req.query.age) {
//         resp.send("Please provide your age")
//     }
//     else if (req.query.age<18) {
//         resp.send("You are under aged")
//     }
//     else {
//         next();
//     }
// }

// app.use(reqFilter);

app.set('view engine', 'ejs');
// app.use(express.static('dirpath'));
app.use(express.json());

app.get('/', (req, res) => {
    res.render('index')

})
route.get('/about', (req, res) => {
    const user = {
        name: 'sanket',
        age: 23,
        skills: ['php', 'nodejs']
    }
    res.render('about', { user })

})
app.get('/products', (req, res) => {
    res.render('products')

})
// app.get('*', (req, res) => {
//     res.render('index')

// })

app.use('/', route);

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
