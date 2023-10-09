const reviewService = require('../services/reviewService');

async function createReview(req, res) {
    const { Review } = req.body;
    console.log (Review)
  
    const createdReview = await reviewService.createReview(Review);
  
    res.status(200).json({
      review: `review has been sent`
    });
  }
  
  module.exports = {
    createReview
  };