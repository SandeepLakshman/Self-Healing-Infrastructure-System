import express from 'express';
import cors from 'cors';
import healthRoutes from './routes/healthRoutes.js';
import productRoutes from './routes/productRoutes.js';
import orderRoutes from './routes/orderRoutes.js';

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Request logger
app.use((req, res, next) => {
  const start = Date.now();
  res.on('finish', () => {
    const duration = Date.now() - start;
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.originalUrl} -> ${res.statusCode} (${duration}ms)`);
  });
  next();
});

// Root Health check for standard K8s liveness & readiness probes
app.use('/healthz', healthRoutes);

// API Routes
app.use('/api/health', healthRoutes);
app.use('/api/products', productRoutes);
app.use('/api/orders', orderRoutes);

// Root informational endpoint
app.get('/', (req, res) => {
  res.json({
    name: 'ShopSphere API Gateway',
    version: '1.0.0',
    status: 'online',
    endpoints: {
      health: '/api/health',
      healthz: '/healthz',
      products: '/api/products',
      categories: '/api/products/categories',
      featured: '/api/products/featured',
      orders: '/api/orders'
    }
  });
});

// 404 Handler
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: `Endpoint ${req.originalUrl} not found on this server.`
  });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error('Unhandled Server Error:', err);
  res.status(500).json({
    success: false,
    message: 'Internal Server Error',
    error: process.env.NODE_ENV === 'production' ? undefined : err.message
  });
});

const server = app.listen(PORT, () => {
  console.log(`🚀 ShopSphere Backend running on http://localhost:${PORT}`);
  console.log(`🩺 Health check ready at http://localhost:${PORT}/api/health`);
});

// Graceful Kubernetes shutdown
const handleShutdown = (signal) => {
  console.log(`\nReceived ${signal}. Shutting down gracefully for Kubernetes container lifecycle...`);
  server.close(() => {
    console.log('ShopSphere HTTP server closed cleanly.');
    process.exit(0);
  });

  // Force shutdown after 10s timeout
  setTimeout(() => {
    console.error('Forcefully terminating server after timeout.');
    process.exit(1);
  }, 10000);
};

process.on('SIGTERM', () => handleShutdown('SIGTERM'));
process.on('SIGINT', () => handleShutdown('SIGINT'));
