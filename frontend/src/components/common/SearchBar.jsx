import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, X, ArrowRight, Sparkles } from 'lucide-react';
import { api } from '../../services/api';

export const SearchBar = ({ className = '', placeholder = "Search curated tech, lifestyle, acoustics, workspace..." }) => {
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const containerRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    if (!query.trim() || query.length < 2) {
      setSuggestions([]);
      return;
    }

    const timer = setTimeout(async () => {
      try {
        setLoading(true);
        const res = await api.getProducts({ search: query, limit: 6 });
        setSuggestions(res.data || []);
      } catch (err) {
        setSuggestions([]);
      } finally {
        setLoading(false);
      }
    }, 200);

    return () => clearTimeout(timer);
  }, [query]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!query.trim()) return;
    setIsOpen(false);
    navigate(`/products?search=${encodeURIComponent(query.trim())}`);
  };

  const handleSelectProduct = (product) => {
    setIsOpen(false);
    setQuery('');
    navigate(`/products/${product.id}`);
  };

  return (
    <div ref={containerRef} className={`relative ${className}`}>
      <form onSubmit={handleSubmit} className="relative flex items-center w-full">
        <Search className="absolute left-4 w-4.5 h-4.5 text-neutral-400 pointer-events-none" />
        <input
          type="text"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setIsOpen(true);
          }}
          onFocus={() => setIsOpen(true)}
          placeholder={placeholder}
          className="w-full pl-11 pr-11 py-3 text-sm bg-black/5 hover:bg-black/7 focus:bg-white text-black placeholder:text-neutral-400 rounded-full border border-black/8 focus:border-black focus:outline-none focus:ring-4 focus:ring-black/5 transition-all duration-200 backdrop-blur-xl font-medium shadow-inner"
        />
        {query && (
          <button
            type="button"
            onClick={() => {
              setQuery('');
              setSuggestions([]);
            }}
            className="absolute right-3.5 p-1 text-neutral-400 hover:text-black rounded-full hover:bg-black/5 transition"
          >
            <X className="w-4 h-4" />
          </button>
        )}
      </form>

      {/* Frosted Glass Dropdown Suggestions */}
      {isOpen && query.trim().length >= 2 && (
        <div className="absolute top-full left-0 right-0 mt-2.5 bg-white/95 backdrop-blur-2xl rounded-2xl shadow-[0_24px_60px_rgba(0,0,0,0.15)] border border-black/10 overflow-hidden z-50 animate-fade-in">
          {loading ? (
            <div className="p-5 text-center text-xs text-neutral-400">
              Searching catalogue...
            </div>
          ) : suggestions.length > 0 ? (
            <div className="py-2.5">
              <div className="px-5 py-2 text-[11px] font-black uppercase tracking-wider text-neutral-400 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-black" />
                Suggested Matches ({suggestions.length})
              </div>
              {suggestions.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleSelectProduct(item)}
                  className="w-full px-5 py-3 flex items-center gap-4 hover:bg-black/5 transition text-left group"
                >
                  <img
                    src={item.thumbnail}
                    alt={item.name}
                    className="w-12 h-12 object-cover rounded-xl border border-black/8 shrink-0 group-hover:scale-105 transition-transform"
                  />
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-bold text-black truncate group-hover:underline">
                      {item.name}
                    </p>
                    <p className="text-xs text-neutral-500 mt-0.5">
                      {item.brand} • <span className="font-bold text-black font-mono">${item.price}</span>
                    </p>
                  </div>
                  <ArrowRight className="w-4 h-4 text-neutral-400 group-hover:text-black group-hover:translate-x-1 transition" />
                </button>
              ))}
              <div className="border-t border-black/5 mt-1.5 pt-1.5">
                <button
                  onClick={handleSubmit}
                  className="w-full px-5 py-2.5 text-xs font-black text-black hover:bg-black/5 text-center flex items-center justify-center gap-1.5 transition"
                >
                  View all results for "{query}"
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ) : (
            <div className="p-6 text-center">
              <p className="text-sm font-bold text-neutral-800">No matching items found</p>
              <p className="text-xs text-neutral-400 mt-1">
                Press Enter to explore complete catalog.
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
