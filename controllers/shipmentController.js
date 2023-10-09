const shipmentService = require('../services/shipmentService');

// Get a shipment by ID
async function  getShipmentById(req, res) {
  const { shipmentId } = req.params;
  try {
    const shipment = await shipmentService.getShipmentById(shipmentId);
    if (!shipment) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.status(200).json({
      message: "Successfully fetched user",
      data: shipment
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
}


module.exports = {
   getShipmentById,
};