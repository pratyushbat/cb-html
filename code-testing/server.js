const express = require('express');
const path = require('path');
const { calcFare, rate } = require('./fareutils');
const app = express();

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use('/', express.static(path.join(__dirname, '/public_static')));

app.post('/calcfare', (req, res) => {
    let min = parseInt(req.body.min);
    let km = parseFloat(req.body.km);
    let fare = calcFare(km, min);
    res.send({ fare });

})
app.get('/rate', (req, res) => {
    res.send(rate);

})
exports=module.exports=app
