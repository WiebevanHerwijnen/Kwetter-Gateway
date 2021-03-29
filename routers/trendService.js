var express = require('express');
var router = express.Router()
const apiAdapter = require('./apiAdapter')

const BASE_URL = 'http://localhost:8088'
const api = apiAdapter(BASE_URL)

router.get('/trends', (req, res) => {
  api.get(req.path).then(resp => {
    res.send(resp.data)
  })
})

router.get('/trend/:trendname', (req, res) => {
  api.get(req.path).then(resp => {
    res.send(resp.data)
  })
})

module.exports = router