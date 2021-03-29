var express = require('express');
var router = express.Router()
const apiAdapter = require('./apiAdapter')

const BASE_URL = 'http://localhost:8000'
const api = apiAdapter(BASE_URL)

router.get('/profile', (req, res) => {
  // api.get(req.path).then(resp => {
  //   res.send(resp.data)
  // })
  console.log(res)
  res.send('test')
})

router.get('/profile/:id', (req, res) => {
  api.get(req.path).then(resp => {
    res.send(resp.data)
  })
})

router.post('/profiles', (req, res) => {
  api.post(req.path, req.body).then(resp => {
    res.send(resp.data)
  })
})

module.exports = router