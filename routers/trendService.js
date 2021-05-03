var express = require('express');
var router = express.Router()
const apiAdapter = require('./apiAdapter')
var jwtAuthz = require('express-jwt-authz');

const BASE_URL = 'http://localhost:3002'
const api = apiAdapter(BASE_URL)

router.get('/trends', (req, res) => {
  api.get(req.path).then(resp => {
    res.send(resp.data)
  })
})

router.post('/trend', (req, res) => {
  console.log(req.body)
  api.post(req.path, req.body).then(resp => {
    res.send(resp.data)
  })
})

router.post('/trend/check', (req, res) => {
  api.post(req.path, req.body).then(resp => {
    res.send(resp.data)
  })
})

router.get('/trend/:trendname', (req, res) => {
  api.get(req.path).then(resp => {
    res.send(resp.data)
  })
})

router.delete('/trend/:trendid', (req, res) => {
  api.delete(req.path).then(resp => {
    res.send(resp.data)
  })
})



module.exports = router