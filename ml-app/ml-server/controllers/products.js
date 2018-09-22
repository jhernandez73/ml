import request from 'request';
import Products from '../models/product';
import fetch from 'node-fetch';
const ml = require('../config').ml;

module.exports = {
  // search products by query string
  search(req, res) {
    const query = req.query
    request({url: ml.url + ml.apis.product.search, qs: query}, (error, response) => {
      if (error) 
        return res.status(500).send({ error: 'Something failed!' });
      const data = JSON.parse(response.body);
      const products = new Products(data);
      res.send(products);
    });
  },
  // get one product by id
  getOneById(req, res) {
    const id = req.params.id;
    request({url: ml.url + ml.apis.product.getOneById + id}, (error, response) => {
      if (error) 
        return res.status(500).send({ error: 'Something failed!' });
      const product = JSON.parse(response.body);
      res.send(product);
    });
  };
  getOneById(req, res) {
    const id = req.params.id;
    Promise.all([
      fetch(ml.url + ml.apis.product.getOneById + id).then(function(response){ return response.json() }),
      fetch(ml.url + ml.apis.product.getOneById + id + '/description').then(function(response){ return response.json() }),
    ]).then(responses => {
      let product = responses[0];
      product.description = responses[1];
      res.send(product);
    });
  }
};
