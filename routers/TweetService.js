var express = require('express');
var router = express.Router()
const apiAdapter = require('./apiAdapter')

const BASE_URL = 'http://localhost:3001'
const api = apiAdapter(BASE_URL)

router.get('/tweets/:profileId/:pageNumber', (req, res) => {
   api.get(req.path).then(resp => {
    res.send(resp.data)
  })
})

router.get('/tweets/:pageNumber', (req, res) => {
  api.get(req.path).then(resp => {
    res.send(resp.data)
  })
})

router.get('/getbytrend/:trend', (req, res) => {
  api.get(req.path).then(resp => {
    res.send(resp.data)
  })
})

router.post('/tweet', (req, res) => {
  api.post(req.path, req.body).then(resp => {
    res.send(resp.data)
  })
})

router.delete('/tweet/delete/:id', (req, res) =>{
  api.delete(req.path).then(resp => {
    res.send(resp.data)
  })
})

router.patch('/tweet/update', (req, res) =>{
    console.log(req.body)
  api.patch(req.path, req.body).then(resp => {
    res.send(resp.data)
  })
})

router.patch('/like', (req, res) =>{
  console.log(req.body)
api.patch(req.path, req.body).then(resp => {
  res.send(resp.data)
})
})

module.exports = router