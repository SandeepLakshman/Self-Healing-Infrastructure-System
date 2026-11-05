import express from 'express';

const router = express.Router();
const orders = [];

// Create demo order
router.post('/', (req, res) => {
  const { items, customer, shippingAddress, paymentMethod, totals } = req.body;

  if (!items || !items.length) {
    return res.status(400).json({
      success: false,
      message: 'Cart cannot be empty when creating an order.'
    });
  }

  if (!customer?.fullName || !customer?.email || !shippingAddress?.address) {
    return res.status(400).json({
      success: false,
      message: 'Customer name, email and shipping address are required.'
    });
  }

  const orderId = 'ORD-' + Math.floor(100000 + Math.random() * 900000);
  const trackingNumber = 'SPH-' + Math.random().toString(36).substring(2, 10).toUpperCase();
  
  // Calculate estimated delivery: 3 business days from now
  const deliveryDate = new Date();
  deliveryDate.setDate(deliveryDate.getDate() + 3);

  const newOrder = {
    orderId,
    trackingNumber,
    createdAt: new Date().toISOString(),
    estimatedDelivery: deliveryDate.toLocaleDateString('en-US', {
      weekday: 'long',
      month: 'short',
      day: 'numeric'
    }),
    status: 'Confirmed',
    customer,
    shippingAddress,
    paymentMethod: paymentMethod || 'Demo Card / UPI',
    items,
    totals: totals || {
      subtotal: items.reduce((sum, item) => sum + (item.price * item.quantity), 0),
      shipping: 0,
      tax: 0,
      total: items.reduce((sum, item) => sum + (item.price * item.quantity), 0)
    }
  };

  orders.push(newOrder);

  res.status(201).json({
    success: true,
    message: 'Order placed successfully!',
    order: newOrder
  });
});

// GET order details by ID
router.get('/:orderId', (req, res) => {
  const { orderId } = req.params;
  const order = orders.find(o => o.orderId === orderId);

  if (!order) {
    return res.status(404).json({
      success: false,
      message: `Order ${orderId} not found.`
    });
  }

  res.json({
    success: true,
    order
  });
});

export default router;
