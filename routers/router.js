var express = require('express');
var router = express.Router()
var ProfileService = require('./profileService')
var TrendService = require('./trendService')
var TweetService = require('./TweetService')

router.use((req, res, next) => {
    console.log("Called: ", req.path)
    next()
})

router.use(ProfileService)
router.use(TrendService)
router.use(TweetService)

module.exports = router