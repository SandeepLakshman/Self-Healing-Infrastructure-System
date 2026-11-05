import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, Zap } from 'lucide-react';

export const HeroBanner = () => {
  return (
    <section className="relative overflow-hidden bg-black text-white py-20 lg:py-28 border-b border-white/10">
      {/* Background ambient monochrome lighting */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-white/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-white/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-10 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 items-center">
          {/* Left Column: Headline & Action Buttons with Increased Size */}
          <div className="lg:col-span-7 space-y-7 text-center lg:text-left">
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white text-xs font-bold uppercase tracking-wider backdrop-blur-xl shadow-sm">
              <Sparkles className="w-4 h-4 text-white" />
              <span>Autumn Atelier Drop 2026</span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[1.05]">
              Engineered minimalism for the <span className="underline decoration-white/30 underline-offset-8">modern purist</span>.
            </h1>

            <p className="text-base sm:text-lg text-neutral-300 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
              Explore precision titanium timepieces, audiophile acoustics, architectural workspace furniture, and Japanese raw denim.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-5 pt-3">
              <Link
                to="/products"
                className="w-full sm:w-auto px-9 py-4 bg-white text-black hover:bg-neutral-200 rounded-full font-black text-xs sm:text-sm uppercase tracking-wider transition-all duration-200 shadow-xl flex items-center justify-center gap-2.5 group hover:scale-[1.03]"
              >
                <span>Explore Catalog</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
              </Link>
              <Link
                to="/products?sort=popular"
                className="w-full sm:w-auto px-8 py-4 bg-white/10 hover:bg-white/15 text-white rounded-full font-black text-xs sm:text-sm uppercase tracking-wider border border-white/20 backdrop-blur-md transition flex items-center justify-center gap-2"
              >
                <Zap className="w-4 h-4 text-white" />
                <span>Trending Drops</span>
              </Link>
            </div>

            {/* Micro stats banner */}
            <div className="pt-10 border-t border-white/10 grid grid-cols-3 gap-8 text-center lg:text-left">
              <div>
                <p className="text-3xl font-black text-white tracking-tight">100%</p>
                <p className="text-xs text-neutral-400 mt-1 uppercase tracking-wider font-semibold">Authentic Edition</p>
              </div>
              <div>
                <p className="text-3xl font-black text-white tracking-tight">2-Day</p>
                <p className="text-xs text-neutral-400 mt-1 uppercase tracking-wider font-semibold">Express Dispatch</p>
              </div>
              <div>
                <p className="text-3xl font-black text-white tracking-tight">4.9 ★</p>
                <p className="text-xs text-neutral-400 mt-1 uppercase tracking-wider font-semibold">Verified Rating</p>
              </div>
            </div>
          </div>

          {/* Right Column: Sizable Frosted Glass Showcase Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              <div className="relative rounded-3xl overflow-hidden border border-white/20 bg-white/10 backdrop-blur-2xl p-6 shadow-2xl">
                <div className="relative aspect-4/3 rounded-2xl overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=1000&q=80"
                    alt="Aura Pro Wireless ANC Studio Headphones"
                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-4 right-4 bg-black/80 backdrop-blur-md text-white text-xs font-bold px-3.5 py-1.5 rounded-full border border-white/20">
                    ★ 4.8 Flagship
                  </div>
                </div>

                <div className="p-4 pt-6">
                  <div className="flex items-center justify-between text-xs text-neutral-400 font-bold mb-1">
                    <span>ACOUSTIC ENGINEERING</span>
                    <span className="text-white font-mono font-black text-sm">-21% OFF</span>
                  </div>
                  <h3 className="text-lg font-black text-white">
                    Aura Pro ANC Studio Headphones
                  </h3>
                  <p className="text-xs text-neutral-400 mt-1 line-clamp-2 leading-relaxed">
                    Custom 45mm beryllium drivers, active hybrid noise cancellation & 40-hr battery.
                  </p>
                  <div className="mt-5 flex items-center justify-between">
                    <div>
                      <span className="text-2xl font-black text-white font-mono">$299</span>
                      <span className="text-xs text-neutral-500 line-through ml-2 font-mono">$379</span>
                    </div>
                    <Link
                      to="/products/prod-1"
                      className="px-5 py-2.5 bg-white text-black hover:bg-neutral-200 rounded-xl font-black text-xs transition uppercase tracking-wider"
                    >
                      View Piece
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
