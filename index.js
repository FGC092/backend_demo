const express = require('express')
const app = express()
const f = require('./_helpers/functions')
const auth = require('./_helpers/authorize')
const bodyParser = require('body-parser');
const utils = require('./_helpers/utils')

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
 
app.post('/products', async function (req, res) {
    try {
        console.log('Starting process...')
        dataSummary = await f.gatherData()
        console.log('Sending response...')
        res.json(dataSummary)
    } catch (error) {
        console.log(error)
        res.status(500).send('Process error :(')
    }
})
app.post('/products/:outputNumber', auth.authorize, utils.inputValidation, async function (req, res) {
    try {
        console.log('Starting process...')
        dataSummary = await f.gatherData( req.params.outputNumber)
        console.log('Sending response...')
        res.json(dataSummary)
    } catch (error) {
        console.log(error)
        res.status(500).send('Process error :(')
    }
})
 
app.listen(3000)