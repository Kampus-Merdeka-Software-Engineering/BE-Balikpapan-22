const express = require('express');
const shipmentController = require('../controllers/shipmentController');
const shipmentRoutes = express.Router();

// Get a shipment by ID
shipmentRoutes.get('/:shipmentId', shipmentController.getShipmentById);

module.exports = { shipmentRoutes };