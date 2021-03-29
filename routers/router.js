var express = require('express');
var router = express.Router()
var feedService = require('./profileService')
var hashtagService = require('./trendService')

router.use((req, res, next) => {
    console.log("Called: ", req.path)
    next()
})

router.use(feedService)
router.use(hashtagService)

module.exports = router