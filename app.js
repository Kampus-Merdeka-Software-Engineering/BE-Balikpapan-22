require('dotenv').config();
const express = require('express');
const cors = require('cors')
const app = express();
const { shipmentRoutes } = require('./routes/shipmentRoutes');
const { pricingRoutes } = require('./routes/pricingRoutes')
const { logger } = require('./middleware/logger');
const { reviewRoutes } = require('./routes/reviewRoutes');
const PORT = 3000 || process.env.PORT;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// middleware buatan sendiri
app.use(logger)

// Routes
const apiRouter = express.Router();
app.use('/api', apiRouter);

// /api/users
apiRouter.use('/shipment', shipmentRoutes);
apiRouter.use('/price', pricingRoutes);
apiRouter.use('/review', reviewRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Internal server error' });
});


app.listen(PORT, () => {
  console.log('Server ready on port:', PORT)
});