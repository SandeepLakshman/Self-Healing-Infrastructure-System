import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Truck, RefreshCw, Headphones, ArrowRight, CheckCircle2 } from 'lucide-react';
import { useToast } from '../../context/ToastContext';

export const Footer = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const { addToast } = useToast();

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      addToast('Please enter a valid email address', 'error');
      return;
    }
    setSubscribed(true);
    addToast('Thank you for subscribing to ShopSphere Atelier!', 'success');
  };

  return (
    <footer className="bg-black text-neutral-400 pt-20 pb-14 border-t border-white/10 mt-24">
      {/* Value Proposition Highlights in Frosted Glass Cards */}
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-10 pb-14 border-b border-white/10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center text-white shrink-0 border border-white/15 backdrop-blur-md">
              <Truck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-sm font-black uppercase tracking-wider text-white">Express Delivery</h4>
              <p className="text-xs sm:text-sm text-neutral-400 mt-1 leading-relaxed">
                Complimentary 2-3 business day courier service on orders $150+.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center text-white shrink-0 border border-white/15 backdrop-blur-md">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-sm font-black uppercase tracking-wider text-white">Authentic Guarantee</h4>
              <p className="text-xs sm:text-sm text-neutral-400 mt-1 leading-relaxed">
                100% verified original merchandise directly from creators.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center text-white shrink-0 border border-white/15 backdrop-blur-md">
              <RefreshCw className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-sm font-black uppercase tracking-wider text-white">30-Day Returns</h4>
              <p className="text-xs sm:text-sm text-neutral-400 mt-1 leading-relaxed">
                Instant digital return labels with zero restocking fees.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center text-white shrink-0 border border-white/15 backdrop-blur-md">
              <Headphones className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-sm font-black uppercase tracking-wider text-white">Concierge Support</h4>
              <p className="text-xs sm:text-sm text-neutral-400 mt-1 leading-relaxed">
                24/7 dedicated assistance via chat and direct phone lines.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Links & Newsletter */}
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-10 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-5">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-black font-black text-base shadow">
                S
              </div>
              <span className="text-2xl font-black text-white tracking-tight">ShopSphere</span>
            </div>
            <p className="text-sm text-neutral-400 leading-relaxed max-w-md font-normal">
              A contemporary digital shopping experience blending industrial design, curated electronics, and modern essentials for living and creating.
            </p>

            {/* Newsletter Subscription */}
            <div className="pt-2">
              <p className="text-xs font-black text-white uppercase tracking-wider mb-2.5">
                Join our private newsletter
              </p>
              {subscribed ? (
                <div className="flex items-center gap-2 text-white text-xs py-2 font-bold">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>You're subscribed! Welcome to ShopSphere.</span>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex gap-2 max-w-md">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-2.5 text-xs bg-white/10 border border-white/15 rounded-xl text-white placeholder:text-neutral-500 focus:outline-none focus:border-white transition backdrop-blur-md font-medium"
                  />
                  <button
                    type="submit"
                    className="px-5 py-2.5 bg-white hover:bg-neutral-200 text-black rounded-xl text-xs font-black flex items-center gap-1.5 transition uppercase tracking-wider"
                  >
                    <span>Join</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Column 1: Shop */}
          <div>
            <h5 className="text-xs font-black uppercase tracking-wider text-white mb-4">Shop Categories</h5>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <Link to="/products?category=electronics" className="hover:text-white transition">Electronics & Tech</Link>
              </li>
              <li>
                <Link to="/products?category=audio" className="hover:text-white transition">Audio & Studio Gear</Link>
              </li>
              <li>
                <Link to="/products?category=fashion" className="hover:text-white transition">Apparel & Lifestyle</Link>
              </li>
              <li>
                <Link to="/products?category=home" className="hover:text-white transition">Home & Workspace</Link>
              </li>
              <li>
                <Link to="/products?category=accessories" className="hover:text-white transition">Accessories & Carry</Link>
              </li>
            </ul>
          </div>

          {/* Column 2: Customer Care */}
          <div>
            <h5 className="text-xs font-black uppercase tracking-wider text-white mb-4">Customer Care</h5>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <Link to="/cart" className="hover:text-white transition">Order Tracking & Bag</Link>
              </li>
              <li>
                <Link to="/products" className="hover:text-white transition">Shipping Policy</Link>
              </li>
              <li>
                <Link to="/products" className="hover:text-white transition">Returns & Exchanges</Link>
              </li>
              <li>
                <Link to="/products" className="hover:text-white transition">Warranty Coverage</Link>
              </li>
              <li>
                <Link to="/products" className="hover:text-white transition">Help Center</Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Kubernetes & Infrastructure */}
          <div>
            <h5 className="text-xs font-black uppercase tracking-wider text-white mb-4">Self-Healing Mesh</h5>
            <p className="text-xs sm:text-sm text-neutral-400 mb-4 leading-relaxed font-normal">
              Engineered for Kubernetes multi-replica high availability with automated health probe failover and zero-downtime rolling updates.
            </p>
            <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/10 border border-white/15 text-xs text-white font-mono backdrop-blur-md">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>Cluster Probes: Active</span>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-10 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs sm:text-sm text-neutral-500 gap-4">
        <p>© {new Date().getFullYear()} ShopSphere Inc. All rights reserved. Designed for high availability.</p>
        <div className="flex items-center gap-6 text-neutral-400 text-xs">
          <span className="hover:text-white transition cursor-pointer">Privacy</span>
          <span className="hover:text-white transition cursor-pointer">Terms of Service</span>
          <span className="hover:text-white transition cursor-pointer">Security</span>
        </div>
      </div>
    </footer>
  );
};
