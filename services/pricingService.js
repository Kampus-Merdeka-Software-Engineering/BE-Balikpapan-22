const { text } = require('express');
const { prisma } = require('../config/prisma');

async function getPrice(asal, tujuan) {
  try {
    const price = await prisma.price.findUnique({
      where: {
        origin: asal,
        destination: tujuan
      }
    });
    return price;
  } catch (error) {
    throw new Error(error);
  }
}

module.exports = {
  getPrice
};