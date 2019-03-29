const express = require('express')

const PORT = process.env.PORT || 443

var app = express()

app
    .get('/', (req, res) => res.send(JSON.parse(req)))
    .listen(PORT, () => console.log(`Listening on ${ PORT }`))