import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { api } from '../../services/api';

export const CategoryGrid = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.getCategories()
      .then((res) => {
        if (res.data) setCategories(res.data);
      })
      .catch((err) => console.error('Error fetching categories:', err))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <section className="py-14 max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-10">
        <div className="h-6 w-48 bg-neutral-200 rounded animate-pulse mb-6"></div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
          {[1, 2, 3, 4, 5].map((n) => (
            <div key={n} className="h-52 bg-neutral-200 rounded-3xl animate-pulse"></div>
          ))}
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-10">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
        <div>
          <span className="text-xs font-black uppercase tracking-widest text-neutral-400">
            Curated Collections
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-black tracking-tight mt-1.5">
            Shop by Category
          </h2>
        </div>
        <Link
          to="/products"
          className="text-sm font-bold text-black hover:opacity-70 flex items-center gap-1.5 group"
        >
          <span>Browse entire inventory</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5">
        {categories.map((cat) => (
          <Link
            key={cat.id}
            to={`/products?category=${cat.slug}`}
            className="group relative rounded-3xl overflow-hidden aspect-3/4 bg-black shadow-sm hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1.5 border border-black/10"
          >
            {/* Background image */}
            <img
              src={cat.image}
              alt={cat.name}
              className="w-full h-full object-cover opacity-80 group-hover:opacity-65 group-hover:scale-110 transition-all duration-500 ease-out"
            />
            {/* Dark glass gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>

            {/* Content info */}
            <div className="absolute inset-0 p-5 flex flex-col justify-end text-white">
              <span className="text-[10px] font-black uppercase tracking-wider bg-white/20 backdrop-blur-md px-2.5 py-1 rounded-full w-fit mb-1.5 border border-white/20">
                {cat.itemCount} Pieces
              </span>
              <h3 className="text-base sm:text-lg font-black leading-snug group-hover:text-white transition-colors">
                {cat.name}
              </h3>
              <p className="text-xs text-neutral-300 line-clamp-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 mt-1">
                {cat.description}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};
