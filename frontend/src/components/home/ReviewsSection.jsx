import React from 'react';
import { RatingStars } from '../common/RatingStars';
import { CheckCircle2, Quote } from 'lucide-react';

export const ReviewsSection = () => {
  const reviews = [
    {
      id: 1,
      name: 'Dr. Sophia Bennett',
      role: 'Hardware Systems Architect',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
      rating: 5,
      product: 'Aura Pro ANC Headphones',
      comment: 'The acoustic profile is astonishing. The spatial separation of instruments is on par with $800 planar cans, but with commuter-ready ANC and unbelievable comfort.'
    },
    {
      id: 2,
      name: 'Alexander Ward',
      role: 'Creative Director',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
      rating: 5,
      product: 'Chronos Horizon Titanium Watch',
      comment: 'Grade 5 titanium feels weightless. The minimalist dial and sapphire crystal reflect the exact industrial design I appreciate. Shipping arrived in 48 hours flat.'
    },
    {
      id: 3,
      name: 'Maya Patel',
      role: 'Lead UX Researcher',
      avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=200&q=80',
      rating: 5,
      product: 'Zenith Pro ErgoDesk Task Chair',
      comment: 'My lower back fatigue completely resolved after two weeks on this chair. The 4D armrests fit my desk height perfectly. Assembly took under 10 minutes.'
    }
  ];

  return (
    <section className="py-16 bg-neutral-100/60 border-y border-black/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-[10px] font-bold uppercase tracking-widest text-neutral-400">
            Real Customer Voices
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-black tracking-tight mt-1">
            Loved by over 50,000 discerning creators
          </h2>
          <p className="text-neutral-500 text-xs sm:text-sm mt-2">
            Unedited feedback from verified purchasers worldwide.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((rev) => (
            <div
              key={rev.id}
              className="bg-white/80 backdrop-blur-md rounded-2xl p-6 border border-black/8 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <RatingStars rating={rev.rating} showCount={false} />
                  <span className="flex items-center gap-1 text-[10px] font-bold text-black bg-black/5 px-2.5 py-0.5 rounded-full border border-black/10">
                    <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                    Verified Buyer
                  </span>
                </div>

                <Quote className="w-5 h-5 text-neutral-300 mb-2" />

                <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed italic">
                  "{rev.comment}"
                </p>
              </div>

              <div className="pt-6 border-t border-black/5 mt-6 flex items-center gap-3">
                <img
                  src={rev.avatar}
                  alt={rev.name}
                  className="w-10 h-10 rounded-full object-cover border border-black/10"
                />
                <div>
                  <h4 className="text-xs font-bold text-black">{rev.name}</h4>
                  <p className="text-[11px] text-neutral-400">{rev.role}</p>
                  <p className="text-[10px] text-neutral-600 font-semibold mt-0.5">Purchased: {rev.product}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
