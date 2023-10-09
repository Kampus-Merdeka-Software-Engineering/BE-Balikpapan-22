const { prisma } = require('../config/prisma');

async function createReview(review) {
    try {
      const mappedReview = {
        data: {
          id: review.id,
          review: review.review
        }
      };
  
      const createdReview = await prisma.review.create(mappedReview);
  
      return createdReview
    } catch (error) {
      console.error(error);
  
      throw new Error()
    }
  }
module.exports = {
  createReview
};