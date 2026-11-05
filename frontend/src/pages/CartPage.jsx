import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Trash2, Plus, Minus, ArrowRight, ShoppingBag, ShieldCheck, Truck, Tag } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useToast } from '../context/ToastContext';

export const CartPage = () => {
  const {
    cartItems,
    totalItems,
    subtotal,
    shipping,
    tax,
    grandTotal,
    isFreeShipping,
    amountToFreeShipping,
    freeShippingProgress,
    updateQuantity,
    removeFromCart,
    clearCart
  } = useCart();

  const { addToast } = useToast();
  const navigate = useNavigate();
  const [promoCode, setPromoCode] = useState('');
  const [discountApplied, setDiscountApplied] = useState(0);

  const handleApplyPromo = (e) => {
    e.preventDefault();
    if (!promoCode.trim()) return;

    if (promoCode.trim().toUpperCase() === 'SPHERE10') {
      const discount = subtotal * 0.1;
      setDiscountApplied(discount);
      addToast('Promo code SPHERE10 applied! 10% saved.', 'success');
    } else {
      addToast('Invalid promotional coupon code', 'error');
    }
  };

  const finalTotal = Math.max(0, grandTotal - discountApplied);

  if (cartItems.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-md mx-auto text-center bg-white/80 backdrop-blur-xl rounded-3xl border border-black/8 p-10 shadow-sm">
          <div className="w-20 h-20 bg-black/5 rounded-full flex items-center justify-center mx-auto mb-5 text-black">
            <ShoppingBag className="w-10 h-10" />
          </div>
          <h2 className="text-2xl font-black text-black mb-2">
            Your shopping bag is empty
          </h2>
          <p className="text-xs text-neutral-500 mb-8 leading-relaxed">
            Discover our curated catalog of precision tech, gear, and lifestyle pieces.
          </p>
          <Link
            to="/products"
            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-black hover:bg-neutral-800 text-white rounded-full text-xs font-bold transition shadow-sm hover:scale-105 uppercase tracking-wider"
          >
            <span>Start Exploring</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-black/5 gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-black text-black tracking-tight">
            Shopping Bag
          </h1>
          <p className="text-xs text-neutral-400 mt-1">
            You have <strong className="text-black">{totalItems}</strong> {totalItems === 1 ? 'item' : 'items'} in your bag
          </p>
        </div>
        <button
          onClick={clearCart}
          className="text-xs font-bold text-neutral-400 hover:text-black self-start sm:self-auto transition"
        >
          Clear entire bag
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mt-8 items-start">
        {/* Left Column: Line Items (8 Cols) */}
        <div className="lg:col-span-8 space-y-4">
          {/* Free Shipping Progress bar in Glass */}
          <div className="p-4 rounded-2xl bg-white/80 backdrop-blur-xl border border-black/8 shadow-sm space-y-2">
            <div className="flex items-center justify-between text-xs font-bold">
              <span className="flex items-center gap-1.5 text-black">
                <Truck className="w-4 h-4 text-black" />
                {isFreeShipping ? (
                  <span className="text-black font-bold">
                    You've unlocked Free Express Shipping!
                  </span>
                ) : (
                  <span>
                    Add <strong className="font-mono">${amountToFreeShipping.toFixed(2)}</strong> more for Free Shipping
                  </span>
                )}
              </span>
              <span className="font-mono text-neutral-400">{Math.round(freeShippingProgress)}%</span>
            </div>
            <div className="w-full h-1.5 bg-neutral-200 rounded-full overflow-hidden">
              <div
                className="h-full bg-black transition-all duration-500"
                style={{ width: `${freeShippingProgress}%` }}
              ></div>
            </div>
          </div>

          {/* Cart Table Items */}
          <div className="bg-white/80 backdrop-blur-xl rounded-2xl border border-black/8 divide-y divide-black/5 shadow-sm overflow-hidden">
            {cartItems.map(({ product, quantity }) => (
              <div
                key={product.id}
                className="p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 hover:bg-black/2 transition"
              >
                {/* Product Thumbnail & Details */}
                <div className="flex items-center gap-4">
                  <Link to={`/products/${product.id}`} className="shrink-0">
                    <img
                      src={product.thumbnail}
                      alt={product.name}
                      className="w-20 h-20 object-cover rounded-xl border border-black/10"
                    />
                  </Link>
                  <div>
                    <span className="text-[9px] font-bold uppercase tracking-wider text-neutral-400">
                      {product.brand}
                    </span>
                    <Link
                      to={`/products/${product.id}`}
                      className="block text-xs font-bold text-black hover:opacity-75 transition line-clamp-1"
                    >
                      {product.name}
                    </Link>
                    <p className="text-xs text-neutral-500 mt-0.5">
                      Price: <span className="font-bold text-black font-mono">${product.price}</span>
                    </p>
                  </div>
                </div>

                {/* Quantity Controls & Line Total */}
                <div className="flex items-center justify-between w-full sm:w-auto gap-6 sm:gap-8">
                  {/* Stepper */}
                  <div className="flex items-center border border-black/10 rounded-xl bg-white/80 overflow-hidden shadow-sm">
                    <button
                      type="button"
                      onClick={() => updateQuantity(product.id, quantity - 1)}
                      className="px-2.5 py-1 text-black hover:bg-black/5 transition"
                      aria-label="Decrease quantity"
                    >
                      <Minus className="w-3.5 h-3.5" />
                    </button>
                    <span className="px-3 py-1 text-xs font-bold text-black font-mono">
                      {quantity}
                    </span>
                    <button
                      type="button"
                      onClick={() => updateQuantity(product.id, quantity + 1)}
                      className="px-2.5 py-1 text-black hover:bg-black/5 transition"
                      aria-label="Increase quantity"
                    >
                      <Plus className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  {/* Line Total */}
                  <div className="text-right min-w-[70px]">
                    <span className="text-sm font-black text-black font-mono">
                      ${(product.price * quantity).toFixed(2)}
                    </span>
                  </div>

                  {/* Remove Button */}
                  <button
                    onClick={() => removeFromCart(product.id)}
                    className="p-2 text-neutral-400 hover:text-black rounded-lg hover:bg-black/5 transition"
                    title="Remove item"
                    aria-label="Remove item"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="pt-2">
            <Link
              to="/products"
              className="text-xs font-bold text-black hover:opacity-70 flex items-center gap-1"
            >
              ← Continue Shopping
            </Link>
          </div>
        </div>

        {/* Right Column: Order Summary in Glass (4 Cols) */}
        <div className="lg:col-span-4 space-y-6">
          <div className="bg-white/80 backdrop-blur-xl rounded-2xl border border-black/8 p-6 shadow-sm space-y-5">
            <h3 className="text-xs font-bold uppercase tracking-wider text-black pb-3 border-b border-black/5">
              Order Summary
            </h3>

            {/* Calculations Breakdown */}
            <div className="space-y-3 text-xs text-neutral-600 font-medium">
              <div className="flex items-center justify-between">
                <span>Items Subtotal</span>
                <span className="font-bold text-black font-mono">${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Estimated Shipping</span>
                <span className="font-bold font-mono">
                  {shipping === 0 ? <strong className="text-black font-bold">FREE</strong> : `$${shipping.toFixed(2)}`}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span>Estimated Sales Tax (8%)</span>
                <span className="font-bold text-black font-mono">${tax.toFixed(2)}</span>
              </div>

              {discountApplied > 0 && (
                <div className="flex items-center justify-between text-black font-bold">
                  <span>Coupon Discount</span>
                  <span className="font-mono">-${discountApplied.toFixed(2)}</span>
                </div>
              )}
            </div>

            {/* Promo Code Input */}
            <form onSubmit={handleApplyPromo} className="pt-2 border-t border-black/5 flex gap-2">
              <div className="relative flex-1">
                <Tag className="w-3.5 h-3.5 text-neutral-400 absolute left-3 top-3" />
                <input
                  type="text"
                  value={promoCode}
                  onChange={(e) => setPromoCode(e.target.value)}
                  placeholder="Code (SPHERE10)"
                  className="w-full pl-9 pr-3 py-2 text-xs bg-black/5 border border-black/8 rounded-xl uppercase font-mono placeholder:normal-case focus:outline-none focus:border-black transition"
                />
              </div>
              <button
                type="submit"
                className="px-4 py-2 bg-black hover:bg-neutral-800 text-white rounded-xl text-xs font-bold transition"
              >
                Apply
              </button>
            </form>

            {/* Grand Total */}
            <div className="pt-4 border-t border-black/5 flex items-baseline justify-between">
              <span className="text-sm font-bold text-black">Total Due</span>
              <div className="text-right">
                <span className="text-2xl font-black text-black font-mono">
                  ${finalTotal.toFixed(2)}
                </span>
                <p className="text-[10px] text-neutral-400 mt-0.5">Taxes & duties included</p>
              </div>
            </div>

            {/* Checkout CTA */}
            <button
              onClick={() => navigate('/checkout')}
              className="w-full py-3.5 px-6 bg-black hover:bg-neutral-800 active:scale-98 text-white rounded-xl text-xs font-bold transition flex items-center justify-center gap-2 shadow-sm uppercase tracking-wider"
            >
              <span>Proceed to Checkout</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            {/* Security Assurance */}
            <div className="pt-2 flex items-center justify-center gap-2 text-[11px] text-neutral-400">
              <ShieldCheck className="w-4 h-4 text-black" />
              <span>Safe 256-bit encrypted checkout</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
