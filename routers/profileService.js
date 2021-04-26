var express = require('express');
var router = express.Router()
const apiAdapter = require('./apiAdapter')

const BASE_URL = 'http://localhost:3000'
const api = apiAdapter(BASE_URL)

router.get('/profiles', (req, res) => {
   api.get(req.path).then(resp => {
    res.send(resp.data)
  })
})

router.get('/profile/:id', (req, res) => {
  api.get(req.path).then(resp => {
    res.send(resp.data)
  })
})

router.post('/profile', (req, res) => {
  console.log(req.body)
  api.post(req.path, req.body).then(resp => {
    res.send(resp.data)
  })
})

router.delete('/delete/:id', (req, res) =>{
  api.delete(req.path).then(resp => {
    res.send(resp.data)
  })
})

router.patch('/update', (req, res) =>{
  api.patch(req.path, req.body).then(resp => {
    res.send(resp.data)
  })
})

module.exports = router