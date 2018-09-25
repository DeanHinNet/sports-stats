const express = require('express')
const port = 8080
const bodyParser = require('body-parser')
const credentials = require('./../../config.js')
const app = express()

const model = require('./../database/models/index.js')
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json())
app.use(express.static(__dirname + '/../client/dist/'))

app.get('/api/stats', (req, res)=>{
   console.log('update info', req.body)
   model.get((data)=>{
    res.status(201).send(data)
   })
})

app.post('/api/stats', (req, res)=>{
    console.log('post info', JSON.stringify(req.body))
    model.update(req.body, (message)=>{
     res.status(201).send(message)
    })
 })

app.listen(port, (req, res)=>{
    console.log(`Sports stats listening on ${port}`)
})