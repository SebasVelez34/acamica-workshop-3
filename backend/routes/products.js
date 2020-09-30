var express = require('express');
var router = express.Router();
const products = require('../models/products');

router.get('/', function (req, res) {
    res.status(200).json({
        products
    });
});

module.exports = router;