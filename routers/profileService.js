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
  }).catch(error =>{
    console.log(error);
  })
})

router.get('/profile_auth/:id', (req, res) => {
  api.get(req.path).then(resp => {
    res.send(resp.data)
  }).catch(error =>{
    console.log(error);
  })
})

router.post('/profile', (req, res) => {
  api.post(req.path, req.body).then(resp => {
    res.send(resp.data)
  }).catch(error =>{
    console.log(error);
  })
})

router.delete('/delete/:id', (req, res) =>{
  api.delete(req.path).then(resp => {
    res.send(resp.data)
  }).catch(error =>{
    console.log(error);
  })
})

router.patch('/update', (req, res) =>{
  api.patch(req.path, req.body).then(resp => {
    res.send(resp.data)
  }).catch(error =>{
    console.log(error);
  })
})

module.exports = router