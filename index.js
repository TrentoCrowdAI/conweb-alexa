const express = require('express')
const PORT = process.env.PORT || 443

express()
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))