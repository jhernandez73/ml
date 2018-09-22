const express = require('express');
const router = express.Router();
const products = require('../controllers/products');

router.route('/products')
  .get(products.search)

router.route('/products/:id')
  .get(products.getOneById)

module.exports = router;
