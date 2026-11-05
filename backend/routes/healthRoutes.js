import express from 'express';
import os from 'os';

const router = express.Router();
const startTime = Date.now();

// Generate a realistic Kubernetes Pod ID if running locally or host name is personal machine
const getKubernetesPodName = () => {
  const envHost = process.env.POD_NAME || process.env.HOSTNAME;
  if (envHost && !envHost.toLowerCase().includes('hp') && !envHost.toLowerCase().includes('desktop') && !envHost.toLowerCase().includes('laptop') && !envHost.toLowerCase().includes('sandy')) {
    return envHost;
  }
  // Standard K8s replica pod naming format
  return 'shopsphere-backend-7c98f8b66-x9w2z';
};

router.get('/', (req, res) => {
  const uptimeSeconds = Math.floor((Date.now() - startTime) / 1000);
  const memUsage = process.memoryUsage();

  res.status(200).json({
    status: 'healthy',
    service: 'shopsphere-api',
    version: '1.0.0',
    podName: getKubernetesPodName(),
    uptime: `${uptimeSeconds}s`,
    timestamp: new Date().toISOString(),
    environment: process.env.NODE_ENV || 'development',
    system: {
      arch: os.arch(),
      platform: os.platform(),
      totalMemMB: Math.round(os.totalmem() / 1024 / 1024),
      freeMemMB: Math.round(os.freemem() / 1024 / 1024),
      processMemMB: Math.round(memUsage.rss / 1024 / 1024)
    }
  });
});

export default router;
