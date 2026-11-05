import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { CheckCircle2, Truck, ArrowRight, Home } from 'lucide-react';

export const OrderSuccessPage = () => {
  const location = useLocation();
  const order = location.state?.order;

  const displayOrder = order || {
    orderId: 'ORD-' + Math.floor(100000 + Math.random() * 900000),
    trackingNumber: 'SPH-749219',
    createdAt: new Date().toISOString(),
    estimatedDelivery: 'Friday, Nov 7',
    status: 'Confirmed',
    customer: { fullName: 'Alex Vance', email: 'alex.vance@example.com' },
    shippingAddress: {
      address: '742 Evergreen Terrace',
      city: 'San Francisco',
      state: 'CA',
      zipCode: '94107'
    },
    paymentMethod: 'Demo Credit Card',
    items: [],
    totals: { total: 299 }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
      {/* Success Badge & Headline */}
      <div className="text-center space-y-4 mb-10">
        <div className="w-20 h-20 bg-black text-white rounded-full flex items-center justify-center mx-auto shadow-xl ring-8 ring-black/5">
          <CheckCircle2 className="w-10 h-10" />
        </div>
        <span className="inline-block px-3 py-1 bg-black/5 text-black text-xs font-bold uppercase tracking-wider rounded-full border border-black/10">
          Order Confirmed & Received
        </span>
        <h1 className="text-3xl sm:text-4xl font-black text-black tracking-tight">
          Thank you for your order, {displayOrder.customer.fullName}!
        </h1>
        <p className="text-xs sm:text-sm text-neutral-500 max-w-lg mx-auto font-normal">
          We've sent an electronic receipt and dispatch tracking link to <strong className="text-black font-semibold">{displayOrder.customer.email}</strong>.
        </p>
      </div>

      {/* Order Meta Card in Glass */}
      <div className="bg-white/80 backdrop-blur-xl rounded-3xl border border-black/8 p-8 shadow-sm space-y-8">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pb-6 border-b border-black/5 text-xs">
          <div>
            <span className="text-neutral-400 font-bold uppercase text-[10px]">Order Number</span>
            <p className="text-sm font-bold text-black font-mono mt-0.5">{displayOrder.orderId}</p>
          </div>
          <div>
            <span className="text-neutral-400 font-bold uppercase text-[10px]">Tracking Code</span>
            <p className="text-sm font-bold text-black font-mono mt-0.5">{displayOrder.trackingNumber}</p>
          </div>
          <div>
            <span className="text-neutral-400 font-bold uppercase text-[10px]">Estimated Delivery</span>
            <p className="text-sm font-bold text-black mt-0.5">{displayOrder.estimatedDelivery}</p>
          </div>
          <div>
            <span className="text-neutral-400 font-bold uppercase text-[10px]">Payment Method</span>
            <p className="text-sm font-bold text-black mt-0.5">{displayOrder.paymentMethod}</p>
          </div>
        </div>

        {/* Shipping Destination */}
        <div className="flex flex-col sm:flex-row items-start justify-between gap-6 pb-6 border-b border-black/5 text-xs">
          <div>
            <h3 className="font-bold uppercase tracking-wider text-neutral-400 text-[10px] mb-2">
              Shipping Address
            </h3>
            <p className="font-bold text-black">{displayOrder.customer.fullName}</p>
            <p className="text-neutral-600">{displayOrder.shippingAddress.address}</p>
            <p className="text-neutral-600">
              {displayOrder.shippingAddress.city}, {displayOrder.shippingAddress.state} {displayOrder.shippingAddress.zipCode}
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-black text-white max-w-xs space-y-1 shadow">
            <div className="flex items-center gap-2 font-bold">
              <Truck className="w-4 h-4 text-white" />
              <span>Priority Dispatch Ready</span>
            </div>
            <p className="text-[11px] text-neutral-300 leading-snug font-normal">
              Your parcel is scheduled for packaging and priority courier handover within 24 hours.
            </p>
          </div>
        </div>

        {/* Ordered items breakdown */}
        {displayOrder.items && displayOrder.items.length > 0 && (
          <div>
            <h3 className="text-[10px] font-bold uppercase tracking-wider text-neutral-400 mb-4">
              Items in this shipment
            </h3>
            <div className="divide-y divide-black/5">
              {displayOrder.items.map((item, idx) => (
                <div key={idx} className="py-3 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-3">
                    {item.thumbnail && (
                      <img
                        src={item.thumbnail}
                        alt={item.name}
                        className="w-12 h-12 object-cover rounded-xl border border-black/10"
                      />
                    )}
                    <div>
                      <p className="font-bold text-black">{item.name}</p>
                      <p className="text-neutral-400 text-[11px] font-mono">Qty: {item.quantity}</p>
                    </div>
                  </div>
                  <span className="font-bold font-mono text-black">
                    ${(item.price * item.quantity).toFixed(2)}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* CTAs */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <Link
            to="/"
            className="w-full sm:w-auto px-6 py-3 bg-black/5 hover:bg-black/10 text-black rounded-xl text-xs font-bold transition flex items-center justify-center gap-2 uppercase tracking-wider"
          >
            <Home className="w-4 h-4" />
            <span>Return Home</span>
          </Link>
          <Link
            to="/products"
            className="w-full sm:w-auto px-8 py-3 bg-black hover:bg-neutral-800 text-white rounded-xl text-xs font-bold transition flex items-center justify-center gap-2 shadow-sm uppercase tracking-wider"
          >
            <span>Explore More Pieces</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
};
