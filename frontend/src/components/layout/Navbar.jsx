import React from 'react';
import { NavLink } from 'react-router-dom';
import { Sparkles, Flame } from 'lucide-react';

export const Navbar = () => {
  const links = [
    { label: 'All Catalog', path: '/products' },
    { label: 'Electronics', path: '/products?category=electronics' },
    { label: 'Audio & Sound', path: '/products?category=audio' },
    { label: 'Fashion & Apparel', path: '/products?category=fashion' },
    { label: 'Home & Office', path: '/products?category=home' },
    { label: 'Accessories & Carry', path: '/products?category=accessories' },
  ];

  return (
    <nav className="hidden lg:block bg-white/70 backdrop-blur-xl border-b border-black/8 py-3">
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-10 flex items-center justify-between">
        <ul className="flex items-center gap-8">
          {links.map((link) => (
            <li key={link.path}>
              <NavLink
                to={link.path}
                className={({ isActive }) =>
                  `text-sm font-semibold tracking-normal transition-colors duration-150 ${
                    isActive
                      ? 'text-black font-extrabold underline underline-offset-8 decoration-2 decoration-black'
                      : 'text-neutral-500 hover:text-black'
                  }`
                }
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-6 text-sm font-semibold">
          <NavLink
            to="/products?sort=popular"
            className="flex items-center gap-1.5 text-neutral-800 hover:text-black transition"
          >
            <Flame className="w-4 h-4 text-black" />
            <span>Trending Drops</span>
          </NavLink>
          <span className="text-neutral-300">|</span>
          <NavLink
            to="/products?sort=rating"
            className="flex items-center gap-1.5 text-neutral-800 hover:text-black transition"
          >
            <Sparkles className="w-4 h-4 text-black" />
            <span>Top Rated</span>
          </NavLink>
        </div>
      </div>
    </nav>
  );
};
