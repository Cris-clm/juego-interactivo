const express = require('express')
let app = express()
app.get('/', function (request, response) {
    response.json({ mensaje: 'ok' })
})
app.listen(3000,()=>{
console.log('escuchando en el Puerto 3000')
})