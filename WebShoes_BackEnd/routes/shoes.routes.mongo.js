var express = require('express')
var router = express.Router()
var shoeService = require('../services/shoe.service.module')

router.get(
    '/list',
    function(req, res, next) {
        shoeService.list(req, res)
    }
);

router.post(
    '/create',
    function (req, res, next) {
        shoeService.create(req, res)
    }
)

router.delete(
    '/delete/:id',
    function (req, res, next) {
        shoeService.delete(req, res)
    }
)

router.get(
    '/retrieve/:id',
    function (req, res, next) {
        shoeService.retrieve(req, res)
    }
)

router.put(
    '/update/:id',
    function (req, res, next) {
        shoeService.update(req, res)
    }
)



module.exports = router