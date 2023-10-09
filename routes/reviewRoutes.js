const express = require('express');
const reviewController = require('../controllers/reviewController');
const reviewRoutes = express.Router();

reviewRoutes.post('/', reviewController.createReview);


module.exports = { reviewRoutes };