const express = require('express');
const priceController = require('../controllers');
const pricingRoutes = express.Router();

// Get price
userRoutes.get('/price', priceController.getPrice);


module.exports = router;