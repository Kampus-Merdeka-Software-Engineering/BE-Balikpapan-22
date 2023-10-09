const express = require('express');
const pricingController = require('../controllers/pricingController');
const pricingRoutes = express.Router();

// Get price
pricingRoutes.get('/', pricingController.getPrice);

module.exports = { pricingRoutes };