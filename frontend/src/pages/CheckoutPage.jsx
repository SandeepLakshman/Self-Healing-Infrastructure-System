import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { ShieldCheck, Lock, CreditCard, Smartphone, Building, Truck, ArrowLeft } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useToast } from '../context/ToastContext';
import { api } from '../services/api';

export const CheckoutPage = () => {
  const { cartItems, subtotal, shipping, tax, grandTotal, clearCart } = useCart();
  const { addToast } = useToast();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  // Form State
  const [formData, setFormData] = useState({
    fullName: 'Alex Vance',
    email: 'alex.vance@example.com',
    phone: '+1 (555) 382-9102',
    address: '742 Evergreen Terrace',
    city: 'San Francisco',
    state: 'CA',
    zipCode: '94107',
    country: 'United States',
    paymentMethod: 'card'
  });

  if (cartItems.length === 0) {
    return (
      <div className="max-w-md mx-auto py-20 px-4 text-center">
        <h2 className="text-xl font-bold text-black mb-2">No items to checkout</h2>
        <p className="text-xs text-neutral-400 mb-6">Your shopping bag is currently empty.</p>
        <Link
          to="/products"
          className="px-6 py-2.5 bg-black text-white rounded-full text-xs font-bold hover:bg-neutral-800 transition"
        >
          Return to Products
        </Link>
      </div>
    );
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handlePlaceOrder = async (e) => {
    e.preventDefault();

    if (!formData.fullName || !formData.email || !formData.address || !formData.zipCode) {
      addToast('Please complete all required fields', 'error');
      return;
    }

    try {
      setLoading(true);
      const payload = {
        items: cartItems.map((item) => ({
          id: item.product.id,
          name: item.product.name,
          price: item.product.price,
          quantity: item.quantity,
          thumbnail: item.product.thumbnail
        })),
        customer: {
          fullName: formData.fullName,
          email: formData.email,
          phone: formData.phone
        },
        shippingAddress: {
          address: formData.address,
          city: formData.city,
          state: formData.state,
          zipCode: formData.zipCode,
          country: formData.country
        },
        paymentMethod:
          formData.paymentMethod === 'card'
            ? 'Demo Credit Card'
            : formData.paymentMethod === 'upi'
            ? 'Demo UPI / Instant Pay'
            : formData.paymentMethod === 'netbanking'
            ? 'Demo Net Banking'
            : 'Cash on Delivery',
        totals: {
          subtotal,
          shipping,
          tax,
          total: grandTotal
        }
      };

      const res = await api.createOrder(payload);

      if (res.success && res.order) {
        clearCart();
        addToast('Order confirmed successfully!', 'success');
        navigate('/order-success', { state: { order: res.order } });
      }
    } catch (err) {
      console.error('Order error:', err);
      addToast(err.message || 'Failed to place order. Try again.', 'error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="mb-8">
        <Link
          to="/cart"
          className="inline-flex items-center gap-1.5 text-xs font-bold text-neutral-400 hover:text-black transition mb-3"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Shopping Bag</span>
        </Link>
        <h1 className="text-2xl sm:text-3xl font-black text-black tracking-tight flex items-center gap-2">
          <span>Secure Checkout</span>
          <Lock className="w-5 h-5 text-black" />
        </h1>
      </div>

      <form onSubmit={handlePlaceOrder}>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Information Forms in Frosted Glass (7 Cols) */}
          <div className="lg:col-span-7 space-y-8">
            {/* Step 1: Contact Details */}
            <div className="bg-white/80 backdrop-blur-xl rounded-2xl border border-black/8 p-6 shadow-sm space-y-4">
              <div className="flex items-center gap-2 pb-3 border-b border-black/5">
                <span className="w-6 h-6 rounded-full bg-black text-white text-xs font-bold flex items-center justify-center">
                  1
                </span>
                <h2 className="text-xs font-bold uppercase tracking-wider text-black">
                  Contact Information
                </h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="sm:col-span-2">
                  <label className="block text-xs font-bold text-neutral-700 mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    required
                    value={formData.fullName}
                    onChange={handleChange}
                    className="w-full px-3.5 py-2 text-xs bg-black/5 border border-black/8 rounded-xl focus:bg-white focus:outline-none focus:border-black transition font-medium"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-neutral-700 mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-3.5 py-2 text-xs bg-black/5 border border-black/8 rounded-xl focus:bg-white focus:outline-none focus:border-black transition font-medium"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-neutral-700 mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-3.5 py-2 text-xs bg-black/5 border border-black/8 rounded-xl focus:bg-white focus:outline-none focus:border-black transition font-medium"
                  />
                </div>
              </div>
            </div>

            {/* Step 2: Shipping Address */}
            <div className="bg-white/80 backdrop-blur-xl rounded-2xl border border-black/8 p-6 shadow-sm space-y-4">
              <div className="flex items-center gap-2 pb-3 border-b border-black/5">
                <span className="w-6 h-6 rounded-full bg-black text-white text-xs font-bold flex items-center justify-center">
                  2
                </span>
                <h2 className="text-xs font-bold uppercase tracking-wider text-black">
                  Delivery Address
                </h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="sm:col-span-2">
                  <label className="block text-xs font-bold text-neutral-700 mb-1">
                    Street Address *
                  </label>
                  <input
                    type="text"
                    name="address"
                    required
                    value={formData.address}
                    onChange={handleChange}
                    className="w-full px-3.5 py-2 text-xs bg-black/5 border border-black/8 rounded-xl focus:bg-white focus:outline-none focus:border-black transition font-medium"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-neutral-700 mb-1">
                    City *
                  </label>
                  <input
                    type="text"
                    name="city"
                    required
                    value={formData.city}
                    onChange={handleChange}
                    className="w-full px-3.5 py-2 text-xs bg-black/5 border border-black/8 rounded-xl focus:bg-white focus:outline-none focus:border-black transition font-medium"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-neutral-700 mb-1">
                    State / Region *
                  </label>
                  <input
                    type="text"
                    name="state"
                    required
                    value={formData.state}
                    onChange={handleChange}
                    className="w-full px-3.5 py-2 text-xs bg-black/5 border border-black/8 rounded-xl focus:bg-white focus:outline-none focus:border-black transition font-medium"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-neutral-700 mb-1">
                    ZIP / Postal Code *
                  </label>
                  <input
                    type="text"
                    name="zipCode"
                    required
                    value={formData.zipCode}
                    onChange={handleChange}
                    className="w-full px-3.5 py-2 text-xs bg-black/5 border border-black/8 rounded-xl focus:bg-white focus:outline-none focus:border-black transition font-medium"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-neutral-700 mb-1">
                    Country
                  </label>
                  <select
                    name="country"
                    value={formData.country}
                    onChange={handleChange}
                    className="w-full px-3.5 py-2 text-xs bg-black/5 border border-black/8 rounded-xl focus:bg-white focus:outline-none focus:border-black transition font-medium"
                  >
                    <option value="United States">United States</option>
                    <option value="Canada">Canada</option>
                    <option value="United Kingdom">United Kingdom</option>
                    <option value="Germany">Germany</option>
                    <option value="India">India</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Step 3: Demo Payment Method */}
            <div className="bg-white/80 backdrop-blur-xl rounded-2xl border border-black/8 p-6 shadow-sm space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-black/5">
                <div className="flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-black text-white text-xs font-bold flex items-center justify-center">
                    3
                  </span>
                  <h2 className="text-xs font-bold uppercase tracking-wider text-black">
                    Payment Method
                  </h2>
                </div>
                <span className="text-[10px] font-bold uppercase tracking-wider bg-black text-white px-2.5 py-0.5 rounded-full">
                  Demo Sandbox
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <label
                  className={`p-4 rounded-xl border cursor-pointer transition flex items-start gap-3 ${
                    formData.paymentMethod === 'card'
                      ? 'border-black bg-black/5 ring-1 ring-black'
                      : 'border-black/10 hover:border-black/30'
                  }`}
                >
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="card"
                    checked={formData.paymentMethod === 'card'}
                    onChange={handleChange}
                    className="mt-0.5 accent-black"
                  />
                  <div>
                    <div className="flex items-center gap-2">
                      <CreditCard className="w-4 h-4 text-black" />
                      <span className="text-xs font-bold text-black">Credit / Debit Card</span>
                    </div>
                    <p className="text-[11px] text-neutral-400 mt-0.5">
                      Simulated demo card
                    </p>
                  </div>
                </label>

                <label
                  className={`p-4 rounded-xl border cursor-pointer transition flex items-start gap-3 ${
                    formData.paymentMethod === 'upi'
                      ? 'border-black bg-black/5 ring-1 ring-black'
                      : 'border-black/10 hover:border-black/30'
                  }`}
                >
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="upi"
                    checked={formData.paymentMethod === 'upi'}
                    onChange={handleChange}
                    className="mt-0.5 accent-black"
                  />
                  <div>
                    <div className="flex items-center gap-2">
                      <Smartphone className="w-4 h-4 text-black" />
                      <span className="text-xs font-bold text-black">Instant UPI / QR</span>
                    </div>
                    <p className="text-[11px] text-neutral-400 mt-0.5">
                      Fast contactless payment
                    </p>
                  </div>
                </label>

                <label
                  className={`p-4 rounded-xl border cursor-pointer transition flex items-start gap-3 ${
                    formData.paymentMethod === 'netbanking'
                      ? 'border-black bg-black/5 ring-1 ring-black'
                      : 'border-black/10 hover:border-black/30'
                  }`}
                >
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="netbanking"
                    checked={formData.paymentMethod === 'netbanking'}
                    onChange={handleChange}
                    className="mt-0.5 accent-black"
                  />
                  <div>
                    <div className="flex items-center gap-2">
                      <Building className="w-4 h-4 text-black" />
                      <span className="text-xs font-bold text-black">Net Banking</span>
                    </div>
                    <p className="text-[11px] text-neutral-400 mt-0.5">
                      Major global banks
                    </p>
                  </div>
                </label>

                <label
                  className={`p-4 rounded-xl border cursor-pointer transition flex items-start gap-3 ${
                    formData.paymentMethod === 'cod'
                      ? 'border-black bg-black/5 ring-1 ring-black'
                      : 'border-black/10 hover:border-black/30'
                  }`}
                >
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="cod"
                    checked={formData.paymentMethod === 'cod'}
                    onChange={handleChange}
                    className="mt-0.5 accent-black"
                  />
                  <div>
                    <div className="flex items-center gap-2">
                      <Truck className="w-4 h-4 text-black" />
                      <span className="text-xs font-bold text-black">Cash on Delivery</span>
                    </div>
                    <p className="text-[11px] text-neutral-400 mt-0.5">
                      Pay upon physical arrival
                    </p>
                  </div>
                </label>
              </div>

              {formData.paymentMethod === 'card' && (
                <div className="p-4 bg-black/5 rounded-xl border border-black/8 space-y-3 mt-3 animate-fade-in">
                  <div className="flex items-center justify-between text-xs text-neutral-500">
                    <span className="font-bold text-black">Simulated Test Card</span>
                    <span className="font-mono text-[10px] bg-black text-white px-2 py-0.5 rounded">SANDBOX</span>
                  </div>
                  <input
                    type="text"
                    disabled
                    value="•••• •••• •••• 4242 (Auto Demo Card)"
                    className="w-full px-3 py-2 text-xs bg-white/80 border border-black/10 rounded-lg text-black font-mono"
                  />
                </div>
              )}
            </div>
          </div>

          {/* Right Column: Order Overview in Frosted Glass (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white/80 backdrop-blur-xl rounded-2xl border border-black/8 p-6 shadow-sm space-y-5">
              <h3 className="text-xs font-bold uppercase tracking-wider text-black pb-3 border-b border-black/5">
                In Your Bag ({cartItems.length} items)
              </h3>

              <div className="max-h-64 overflow-y-auto space-y-3 pr-1">
                {cartItems.map(({ product, quantity }) => (
                  <div key={product.id} className="flex items-center gap-3">
                    <img
                      src={product.thumbnail}
                      alt={product.name}
                      className="w-12 h-12 rounded-lg object-cover border border-black/10 shrink-0"
                    />
                    <div className="flex-1 min-w-0">
                      <p className="text-xs font-bold text-black truncate">{product.name}</p>
                      <p className="text-[11px] text-neutral-400 font-mono">Qty: {quantity}</p>
                    </div>
                    <span className="text-xs font-bold text-black font-mono">
                      ${(product.price * quantity).toFixed(2)}
                    </span>
                  </div>
                ))}
              </div>

              <div className="space-y-2.5 pt-4 border-t border-black/5 text-xs text-neutral-600 font-medium">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="font-bold text-black font-mono">${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span className="font-bold font-mono">
                    {shipping === 0 ? <strong className="text-black">FREE</strong> : `$${shipping.toFixed(2)}`}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Estimated Tax</span>
                  <span className="font-bold text-black font-mono">${tax.toFixed(2)}</span>
                </div>
                <div className="flex justify-between pt-3 border-t border-black/5 text-sm font-bold text-black">
                  <span>Total Amount</span>
                  <span className="text-xl font-black font-mono">${grandTotal.toFixed(2)}</span>
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-4 px-6 bg-black hover:bg-neutral-800 active:scale-98 disabled:opacity-70 text-white rounded-xl text-xs font-bold transition flex items-center justify-center gap-2 shadow-md uppercase tracking-wider"
              >
                {loading ? (
                  <span>Authorizing Demo Order...</span>
                ) : (
                  <>
                    <Lock className="w-4 h-4" />
                    <span>Authorize & Confirm (${grandTotal.toFixed(2)})</span>
                  </>
                )}
              </button>

              <div className="text-center pt-2">
                <p className="text-[11px] text-neutral-400 leading-snug">
                  By confirming, you agree to ShopSphere's Terms and 30-Day Money Back Guarantee.
                </p>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};
