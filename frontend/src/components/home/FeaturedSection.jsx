import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Flame, Sparkles } from 'lucide-react';
import { ProductCard } from '../product/ProductCard';
import { SkeletonCard } from '../common/SkeletonCard';
import { api } from '../../services/api';

export const FeaturedSection = () => {
  const [activeTab, setActiveTab] = useState('featured');
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const fetchCall = activeTab === 'featured' ? api.getFeatured() : api.getTrending();
    
    fetchCall
      .then((res) => {
        if (res.data) setProducts(res.data);
      })
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, [activeTab]);

  return (
    <section className="py-16 max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-10">
      {/* Header with Frosted Glass Tabs */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-8 border-b border-black/8 gap-4">
        <div>
          <span className="text-xs font-black uppercase tracking-widest text-neutral-400">
            Handpicked Excellence
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-black tracking-tight mt-1">
            Discover Our Best
          </h2>
        </div>

        {/* Frosted Glass Tab Switcher with Increased Sizing */}
        <div className="flex items-center gap-2 bg-black/5 p-1.5 rounded-2xl backdrop-blur-xl border border-black/8 self-start sm:self-auto">
          <button
            onClick={() => setActiveTab('featured')}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-black transition-all ${
              activeTab === 'featured'
                ? 'bg-white text-black shadow-md'
                : 'text-neutral-500 hover:text-black'
            }`}
          >
            <Sparkles className="w-4 h-4" />
            <span>Featured Selection</span>
          </button>
          <button
            onClick={() => setActiveTab('trending')}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-black transition-all ${
              activeTab === 'trending'
                ? 'bg-white text-black shadow-md'
                : 'text-neutral-500 hover:text-black'
            }`}
          >
            <Flame className="w-4 h-4" />
            <span>Trending Drops</span>
          </button>
        </div>
      </div>

      {/* Product Grid */}
      <div className="mt-10">
        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
              <SkeletonCard key={n} />
            ))}
          </div>
        ) : products.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7">
            {products.slice(0, 12).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 text-neutral-400">
            No products available at this time.
          </div>
        )}
      </div>

      {/* Bottom CTA */}
      <div className="mt-14 text-center">
        <Link
          to="/products"
          className="inline-flex items-center gap-2.5 px-8 py-3.5 bg-white/80 hover:bg-white text-black border border-black/10 rounded-full text-xs sm:text-sm font-black shadow-sm backdrop-blur-xl transition hover:scale-105 uppercase tracking-wider"
        >
          <span>View All {activeTab === 'featured' ? 'Featured' : 'Trending'} Items</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </section>
  );
};
