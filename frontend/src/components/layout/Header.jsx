import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Heart, Menu, X } from 'lucide-react';
import { SearchBar } from '../common/SearchBar';
import { useCart } from '../../context/CartContext';
import { useWishlist } from '../../context/WishlistContext';
import { api } from '../../services/api';

export const Header = () => {
  const { totalItems } = useCart();
  const { wishlistCount } = useWishlist();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [healthData, setHealthData] = useState(null);

  useEffect(() => {
    api.getHealth().then((data) => {
      if (data && data.status) {
        setHealthData(data);
      }
    });
  }, []);

  return (
    <header className="sticky top-0 z-40 bg-white/80 backdrop-blur-2xl border-b border-black/8 shadow-[0_8px_32px_rgba(0,0,0,0.03)] transition-all">
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-10">
        <div className="flex items-center justify-between h-22 gap-6 py-4">
          {/* Logo & Brand with Enhanced Size & Typography */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-black hover:text-neutral-600 focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>

            <Link to="/" className="flex items-center gap-3.5 group">
              <div className="w-12 h-12 rounded-2xl bg-black flex items-center justify-center text-white shadow-lg shadow-black/15 group-hover:scale-105 transition-transform duration-300 border border-white/20">
                <span className="font-black text-xl tracking-tighter">S</span>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl sm:text-2xl font-black tracking-tight text-black group-hover:opacity-85 transition-opacity">
                  ShopSphere
                </span>
                <span className="text-[11px] uppercase tracking-widest text-neutral-500 font-extrabold -mt-0.5 hidden sm:block">
                  Atelier & Technology
                </span>
              </div>
            </Link>
          </div>

          {/* Desktop Glass Search Bar (Longer mirror length & larger text) */}
          <div className="hidden md:flex flex-1 max-w-2xl mx-4">
            <SearchBar className="w-full" />
          </div>

          {/* Action Icons */}
          <div className="flex items-center gap-3 sm:gap-4">
            {/* Kubernetes Pod Replica Badge (Clean K8s Identifier) */}
            {healthData && healthData.podName && (
              <div
                title={`Kubernetes Pod: ${healthData.podName} | Uptime: ${healthData.uptime} | Status: Healthy`}
                className="hidden xl:flex items-center gap-2 px-3.5 py-1.5 bg-black/5 backdrop-blur-xl rounded-full text-xs font-mono text-neutral-800 border border-black/10 hover:bg-black/10 transition cursor-default shadow-sm"
              >
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
                <span className="text-[11px] text-neutral-500 uppercase font-bold">POD:</span>
                <span className="font-bold">{healthData.podName}</span>
              </div>
            )}

            {/* Wishlist Link */}
            <Link
              to="/products"
              className="relative p-3 text-neutral-700 hover:text-black hover:bg-black/5 rounded-full transition duration-200"
              title="Saved Wishlist"
              aria-label="Wishlist"
            >
              <Heart className="w-5 h-5" />
              {wishlistCount > 0 && (
                <span className="absolute top-1.5 right-1.5 bg-black text-white text-[10px] font-black w-4 h-4 rounded-full flex items-center justify-center shadow">
                  {wishlistCount}
                </span>
              )}
            </Link>

            {/* Cart Link - Sizable Luxurious Monochrome Pill */}
            <Link
              to="/cart"
              className="relative flex items-center gap-2.5 pl-4 pr-5 py-2.5 bg-black hover:bg-neutral-800 active:scale-95 text-white rounded-full font-bold text-xs sm:text-sm transition-all duration-200 shadow-md shadow-black/10"
              aria-label="Shopping Cart"
            >
              <div className="relative">
                <ShoppingBag className="w-4 h-4" />
                {totalItems > 0 && (
                  <span className="absolute -top-2.5 -right-2.5 bg-white text-black text-[10px] font-black w-4.5 h-4.5 rounded-full flex items-center justify-center shadow-sm">
                    {totalItems}
                  </span>
                )}
              </div>
              <span className="hidden sm:inline">Bag</span>
            </Link>
          </div>
        </div>

        {/* Mobile Search Input */}
        <div className="pb-4 md:hidden">
          <SearchBar className="w-full" />
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white/95 backdrop-blur-2xl border-t border-black/8 px-6 py-5 space-y-3 animate-fade-in shadow-2xl">
          <Link
            to="/products"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2.5 text-sm font-extrabold text-black hover:bg-black/5 rounded-xl"
          >
            All Products & Gear
          </Link>
          <Link
            to="/products?category=electronics"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-sm text-neutral-600 hover:bg-black/5 rounded-xl font-medium"
          >
            Electronics & Tech
          </Link>
          <Link
            to="/products?category=audio"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-sm text-neutral-600 hover:bg-black/5 rounded-xl font-medium"
          >
            Audio & Acoustics
          </Link>
          <Link
            to="/products?category=fashion"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-sm text-neutral-600 hover:bg-black/5 rounded-xl font-medium"
          >
            Fashion & Lifestyle
          </Link>
          <Link
            to="/products?category=home"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-sm text-neutral-600 hover:bg-black/5 rounded-xl font-medium"
          >
            Home & Workspace
          </Link>
          <Link
            to="/products?category=accessories"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-sm text-neutral-600 hover:bg-black/5 rounded-xl font-medium"
          >
            Accessories & Carry
          </Link>
        </div>
      )}
    </header>
  );
};
