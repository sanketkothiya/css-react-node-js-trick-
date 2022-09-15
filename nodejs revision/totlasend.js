const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {

    res.send()
    res.json()
    res.status()
    res.writeHead()
    res.redirect()
    res.sendFile()
    res.render()

})
app.listen(port, () => console.log(`Example app listening on port ${port}!`))