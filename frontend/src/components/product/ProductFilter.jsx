import React from 'react';
import { Filter, RotateCcw, Check } from 'lucide-react';

export const ProductFilter = ({
  categories = [],
  selectedCategory,
  onCategoryChange,
  priceRange,
  onPriceChange,
  minRating,
  onRatingChange,
  inStockOnly,
  onStockToggle,
  onReset
}) => {
  return (
    <aside aria-label="Product filters" className="bg-white/80 backdrop-blur-xl rounded-2xl border border-black/8 p-5 shadow-[0_4px_24px_rgba(0,0,0,0.03)] space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between pb-4 border-b border-black/5">
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-black">
          <Filter className="w-3.5 h-3.5 text-black" />
          <span>Filter Products</span>
        </div>
        <button
          onClick={onReset}
          className="text-[11px] font-bold text-neutral-400 hover:text-black flex items-center gap-1 transition"
          title="Reset all filters"
        >
          <RotateCcw className="w-3 h-3" />
          <span>Reset</span>
        </button>
      </div>

      {/* Category Filter */}
      <div>
        <h4 className="text-[10px] font-bold uppercase tracking-wider text-neutral-400 mb-2.5">
          Categories
        </h4>
        <div className="space-y-1">
          <button
            onClick={() => onCategoryChange('all')}
            className={`w-full text-left text-xs px-3 py-2 rounded-xl transition flex items-center justify-between font-semibold ${
              selectedCategory === 'all' || !selectedCategory
                ? 'bg-black text-white shadow-sm'
                : 'text-neutral-600 hover:bg-black/5'
            }`}
          >
            <span>All Categories</span>
            {(selectedCategory === 'all' || !selectedCategory) && (
              <Check className="w-3.5 h-3.5 text-white" />
            )}
          </button>
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => onCategoryChange(cat.slug)}
              className={`w-full text-left text-xs px-3 py-2 rounded-xl transition flex items-center justify-between font-semibold ${
                selectedCategory === cat.slug
                  ? 'bg-black text-white shadow-sm'
                  : 'text-neutral-600 hover:bg-black/5'
              }`}
            >
              <span>{cat.name}</span>
              {selectedCategory === cat.slug && (
                <Check className="w-3.5 h-3.5 text-white" />
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Price Range Slider */}
      <div className="pt-2 border-t border-black/5">
        <div className="flex items-center justify-between mb-2">
          <h4 className="text-[10px] font-bold uppercase tracking-wider text-neutral-400">
            Max Price
          </h4>
          <span className="text-xs font-bold text-black font-mono">
            ${priceRange}
          </span>
        </div>
        <input
          type="range"
          min="50"
          max="650"
          step="25"
          value={priceRange}
          onChange={(e) => onPriceChange(Number(e.target.value))}
          className="w-full h-1.5 bg-neutral-200 rounded-lg appearance-none cursor-pointer accent-black"
        />
        <div className="flex justify-between text-[11px] text-neutral-400 mt-1 font-mono">
          <span>$50</span>
          <span>$650</span>
        </div>
      </div>

      {/* Minimum Rating */}
      <div className="pt-2 border-t border-black/5">
        <h4 className="text-[10px] font-bold uppercase tracking-wider text-neutral-400 mb-2">
          Minimum Rating
        </h4>
        <div className="space-y-1">
          {[4.8, 4.6, 4.0].map((starVal) => (
            <label
              key={starVal}
              className="flex items-center gap-2.5 text-xs text-neutral-600 hover:text-black cursor-pointer py-1 font-medium"
            >
              <input
                type="radio"
                name="ratingFilter"
                checked={minRating === starVal}
                onChange={() => onRatingChange(starVal)}
                className="accent-black rounded-full"
              />
              <span>{starVal}★ & above</span>
            </label>
          ))}
          <label className="flex items-center gap-2.5 text-xs text-neutral-600 hover:text-black cursor-pointer py-1 font-medium">
            <input
              type="radio"
              name="ratingFilter"
              checked={minRating === 0}
              onChange={() => onRatingChange(0)}
              className="accent-black rounded-full"
            />
            <span className="text-neutral-400">Any rating</span>
          </label>
        </div>
      </div>

      {/* Stock Toggle */}
      <div className="pt-2 border-t border-black/5">
        <label className="flex items-center justify-between text-xs font-semibold text-neutral-700 cursor-pointer">
          <span>In Stock Only</span>
          <input
            type="checkbox"
            checked={inStockOnly}
            onChange={(e) => onStockToggle(e.target.checked)}
            className="w-4 h-4 accent-black rounded cursor-pointer"
          />
        </label>
      </div>
    </aside>
  );
};
