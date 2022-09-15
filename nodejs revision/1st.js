const http = require('http')
const fs = require('fs')
const path = require('path')
const dirpath = path.join(__dirname, 'public')
const dirname = `${dirpath}/hello0.txt`;
// http.createServer((req, res) => {
//     res.writeHead(200, { 'content-Type': 'application\json' })
//     // res.write("h1")
//     res.write(JSON.stringify({ name: 'sanket' }))
//     res.end()
// }).listen(4500)

// for (let index = 0; index < 5; index++) {
//     fs.writeFileSync(dirpath + "/hello" + index + ".txt", "sanket")


// }

// fs.readdir(dirpath, (err, data) => {
//     data.forEach(element => {

//         console.log(element)
//     });
// })

fs.readFile(dirname, 'utf8', (err, item) => {
    console.log(item);
})