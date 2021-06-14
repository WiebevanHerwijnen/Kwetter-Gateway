var express = require('express');
var router = express.Router()
const apiAdapter = require('./apiAdapter')

const BASE_URL = 'http://localhost:3004'
const api = apiAdapter(BASE_URL)


router.post('/follower', (req, res) => {
    console.log(req.body)
    api.post(req.path, req.body).then(resp => {
      res.send(resp.data)
    })
  })

module.exports = router