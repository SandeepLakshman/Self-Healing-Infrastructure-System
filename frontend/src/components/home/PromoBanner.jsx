import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Check } from 'lucide-react';

export const PromoBanner = () => {
  return (
    <section className="py-16 max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-10">
      <div className="relative rounded-3xl overflow-hidden bg-black text-white shadow-2xl border border-white/10">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
          {/* Left Text Column with Enhanced Sizing */}
          <div className="p-10 sm:p-14 lg:p-18 space-y-7">
            <span className="inline-block px-3.5 py-1.5 bg-white/10 text-white text-[11px] font-black uppercase tracking-wider rounded-full border border-white/20 backdrop-blur-md">
              Monochrome Series 2026
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight">
              Acoustic precision meets architectural form.
            </h2>

            <p className="text-neutral-300 text-sm sm:text-base leading-relaxed font-normal">
              From responsive Korean mesh task chairs to tactile mechanical keyboards and artisanal goosenecks—experience craftsmanship engineered to eliminate friction.
            </p>

            <ul className="space-y-3 text-sm text-neutral-300">
              <li className="flex items-center gap-3">
                <span className="w-5 h-5 rounded-full bg-white/10 text-white flex items-center justify-center shrink-0 border border-white/20">
                  <Check className="w-3.5 h-3.5" />
                </span>
                <span>Zero fatigue acoustic typing & spine support ergonomics</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-5 h-5 rounded-full bg-white/10 text-white flex items-center justify-center shrink-0 border border-white/20">
                  <Check className="w-3.5 h-3.5" />
                </span>
                <span>Whisper-quiet ceramic ultrasonic mist dispersion</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-5 h-5 rounded-full bg-white/10 text-white flex items-center justify-center shrink-0 border border-white/20">
                  <Check className="w-3.5 h-3.5" />
                </span>
                <span>Fast 15W Qi2 wireless magnetic power station</span>
              </li>
            </ul>

            <div className="pt-3">
              <Link
                to="/products?category=home"
                className="inline-flex items-center gap-2.5 px-8 py-4 bg-white text-black hover:bg-neutral-200 font-black text-xs sm:text-sm rounded-full shadow-lg transition hover:scale-105 uppercase tracking-wider"
              >
                <span>Shop Workspace Edition</span>
                <ArrowRight className="w-4 h-4 text-black" />
              </Link>
            </div>
          </div>

          {/* Right Image Showcase with Glass Vignette */}
          <div className="relative h-80 sm:h-[450px] lg:h-full min-h-[400px] overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&w=1200&q=80"
              alt="Workspace setup"
              className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-black via-black/40 to-transparent"></div>
          </div>
        </div>
      </div>
    </section>
  );
};
