const pricingService = require('../services/pricingService');

// Get price
async function getPrice(req, res)  {
  const origin = req.query.origin;
  const destination = req.query.destination;
  
  const price = await pricingService.getPrice (origin, destination);

  res.status(200).json(price);
}

module.exports = {
  getPrice
};
