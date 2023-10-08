const { prisma } = require('../config/prisma');

async function getPrice(asal, tujuan) {
  try {
    const basePrice = await prisma.tarif.findFirst({
        where: {
            AND: [
                { origin: asal },
                { destination: tujuan },
            ]
        }
    })
    return {
        price: finalPrice
    };
  } catch (error) {
    console.error(error);

    throw new Error()
  }
}

module.exports = {
  getPrice
};