import React, { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { Filter, SlidersHorizontal, Search, X, PackageOpen, ArrowUpDown } from 'lucide-react';
import { ProductCard } from '../components/product/ProductCard';
import { ProductFilter } from '../components/product/ProductFilter';
import { SkeletonCard } from '../components/common/SkeletonCard';
import { api } from '../services/api';

export const ProductsPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const searchQuery = searchParams.get('search') || '';
  const categoryParam = searchParams.get('category') || 'all';
  const sortParam = searchParams.get('sort') || 'featured';

  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  // Filter States
  const [priceRange, setPriceRange] = useState(650);
  const [minRating, setMinRating] = useState(0);
  const [inStockOnly, setInStockOnly] = useState(false);
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);

  useEffect(() => {
    api.getCategories().then((res) => {
      if (res.data) setCategories(res.data);
    });
  }, []);

  useEffect(() => {
    setLoading(true);
    const params = {
      search: searchQuery || undefined,
      category: categoryParam !== 'all' ? categoryParam : undefined,
      maxPrice: priceRange < 650 ? priceRange : undefined,
      minRating: minRating > 0 ? minRating : undefined,
      inStock: inStockOnly ? 'true' : undefined,
      sort: sortParam
    };

    api.getProducts(params)
      .then((res) => {
        setProducts(res.data || []);
      })
      .catch((err) => {
        console.error('Error fetching filtered products:', err);
        setProducts([]);
      })
      .finally(() => setLoading(false));
  }, [searchQuery, categoryParam, sortParam, priceRange, minRating, inStockOnly]);

  const handleCategoryChange = (slug) => {
    const newParams = new URLSearchParams(searchParams);
    if (slug === 'all') {
      newParams.delete('category');
    } else {
      newParams.set('category', slug);
    }
    setSearchParams(newParams);
  };

  const handleSortChange = (newSort) => {
    const newParams = new URLSearchParams(searchParams);
    newParams.set('sort', newSort);
    setSearchParams(newParams);
  };

  const handleClearSearch = () => {
    const newParams = new URLSearchParams(searchParams);
    newParams.delete('search');
    setSearchParams(newParams);
  };

  const handleResetFilters = () => {
    setPriceRange(650);
    setMinRating(0);
    setInStockOnly(false);
    const newParams = new URLSearchParams();
    setSearchParams(newParams);
  };

  return (
    <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-10 py-10">
      {/* Top Breadcrumb & Title */}
      <div className="mb-8 flex flex-col md:flex-row md:items-center justify-between gap-5">
        <div>
          <div className="text-xs text-neutral-400 flex items-center gap-2 mb-1.5 font-semibold">
            <Link to="/" className="hover:text-black transition">Home</Link>
            <span>/</span>
            <span className="text-black capitalize font-bold">
              {categoryParam !== 'all' ? categoryParam : 'Complete Catalog'}
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-black text-black tracking-tight">
            {categoryParam !== 'all'
              ? `${categoryParam.charAt(0).toUpperCase() + categoryParam.slice(1)} Edition`
              : 'Complete Catalog'}
          </h1>
        </div>

        {/* Sort & Mobile Filter Toggle */}
        <div className="flex items-center gap-4">
          <button
            onClick={() => setMobileFilterOpen(!mobileFilterOpen)}
            className="lg:hidden flex items-center gap-2 px-4 py-2.5 bg-white/80 backdrop-blur-xl border border-black/10 rounded-2xl text-xs sm:text-sm font-bold text-black shadow-sm"
          >
            <SlidersHorizontal className="w-4 h-4 text-black" />
            <span>Filters</span>
          </button>

          <div className="flex items-center gap-2.5 bg-white/80 backdrop-blur-xl border border-black/10 rounded-2xl px-4 py-2.5 shadow-sm">
            <ArrowUpDown className="w-4 h-4 text-neutral-400" />
            <span className="text-xs sm:text-sm text-neutral-400 font-bold hidden sm:inline">Sort:</span>
            <select
              value={sortParam}
              onChange={(e) => handleSortChange(e.target.value)}
              className="text-xs sm:text-sm font-black text-black bg-transparent focus:outline-none cursor-pointer"
            >
              <option value="featured">Featured & Curated</option>
              <option value="popular">Most Popular</option>
              <option value="rating">Highest Rated</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="newest">New Arrivals</option>
            </select>
          </div>
        </div>
      </div>

      {/* Active Search Filter Badge */}
      {searchQuery && (
        <div className="mb-8 inline-flex items-center gap-2.5 px-4 py-2 bg-black text-white rounded-full text-xs font-bold shadow-md">
          <Search className="w-4 h-4" />
          <span>Results for: "<strong>{searchQuery}</strong>"</span>
          <button
            onClick={handleClearSearch}
            className="p-1 hover:bg-neutral-800 rounded-full transition"
            aria-label="Clear search"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Layout: Sidebar + Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
        {/* Desktop Filter Sidebar */}
        <div className="hidden lg:block lg:col-span-1">
          <ProductFilter
            categories={categories}
            selectedCategory={categoryParam}
            onCategoryChange={handleCategoryChange}
            priceRange={priceRange}
            onPriceChange={setPriceRange}
            minRating={minRating}
            onRatingChange={setMinRating}
            inStockOnly={inStockOnly}
            onStockToggle={setInStockOnly}
            onReset={handleResetFilters}
          />
        </div>

        {/* Mobile Filter Drawer */}
        {mobileFilterOpen && (
          <div className="lg:hidden col-span-1 mb-6 animate-fade-in">
            <ProductFilter
              categories={categories}
              selectedCategory={categoryParam}
              onCategoryChange={(slug) => {
                handleCategoryChange(slug);
                setMobileFilterOpen(false);
              }}
              priceRange={priceRange}
              onPriceChange={setPriceRange}
              minRating={minRating}
              onRatingChange={setMinRating}
              inStockOnly={inStockOnly}
              onStockToggle={setInStockOnly}
              onReset={() => {
                handleResetFilters();
                setMobileFilterOpen(false);
              }}
            />
          </div>
        )}

        {/* Main Product Grid */}
        <div className="lg:col-span-3">
          <div className="flex items-center justify-between text-xs sm:text-sm text-neutral-400 mb-6 pb-2.5 border-b border-black/5 font-bold">
            <span>
              Showing <strong className="text-black font-black">{products.length}</strong> crafted products
            </span>
          </div>

          {loading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
              {[1, 2, 3, 4, 5, 6].map((n) => (
                <SkeletonCard key={n} />
              ))}
            </div>
          ) : products.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            /* Empty State */
            <div className="bg-white/80 backdrop-blur-xl rounded-3xl border border-black/8 p-14 text-center shadow-sm">
              <div className="w-20 h-20 rounded-3xl bg-black/5 text-neutral-400 flex items-center justify-center mx-auto mb-5">
                <PackageOpen className="w-10 h-10 text-black" />
              </div>
              <h3 className="text-xl font-black text-black">No matching items found</h3>
              <p className="text-sm text-neutral-400 max-w-sm mx-auto mt-1.5 mb-8">
                Try loosening your filter parameters or clearing your search query.
              </p>
              <button
                onClick={handleResetFilters}
                className="px-7 py-3 bg-black hover:bg-neutral-800 text-white rounded-full text-xs font-black transition shadow-lg uppercase tracking-wider"
              >
                Reset All Filters
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
