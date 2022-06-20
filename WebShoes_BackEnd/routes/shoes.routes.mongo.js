var express = require('express')
var router = express.Router()
var shoeService = require('../services/shoe.service.module')

router.get(
    '/list',
    function(req, res, next) {
        shoeService.list(req, res)
    }
);

module.exports = router