const { prisma } = require('../config/prisma');

// Function to get a shipment by ID
async function getShipmentById(shipmentId) {
  try {
    const shipment = await prisma.shipment.findUnique({
      where: {
        id: Number(shipmentId)
      }
    })
    return shipment
  } catch (error) {
    throw new Error(error)
  }
}


module.exports = {
  getShipmentById,
};