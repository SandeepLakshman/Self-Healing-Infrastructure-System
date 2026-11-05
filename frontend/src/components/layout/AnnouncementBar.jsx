import React from 'react';
import { Sparkles, ShieldCheck, Truck } from 'lucide-react';

export const AnnouncementBar = () => {
  return (
    <aside aria-label="Announcements" className="bg-black text-white text-xs sm:text-sm py-2.5 px-5 sm:px-8 lg:px-10 border-b border-white/10">
      <div className="max-w-[1440px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
        <div className="flex items-center gap-2.5 text-center sm:text-left">
          <span className="flex items-center gap-1.5 font-bold text-white">
            <Sparkles className="w-4 h-4 text-white" />
            Limited Seasonal Atelier:
          </span>
          <span className="text-white/85">
            Complimentary Worldwide Shipping on orders over $150 with code <strong className="text-white font-mono bg-white/15 px-2 py-0.5 rounded border border-white/20 font-bold">SPHERE10</strong>
          </span>
        </div>

        <div className="hidden md:flex items-center gap-6 text-white/75 text-xs">
          <span className="flex items-center gap-1.5 hover:text-white transition font-medium">
            <Truck className="w-4 h-4 text-white/90" />
            2-3 Day Dispatch
          </span>
          <span className="flex items-center gap-1.5 hover:text-white transition font-medium">
            <ShieldCheck className="w-4 h-4 text-white/90" />
            Authenticity Guaranteed
          </span>
          <span className="text-white/30">|</span>
          <span className="text-white font-mono font-bold">USD ($)</span>
        </div>
      </div>
    </aside>
  );
};
