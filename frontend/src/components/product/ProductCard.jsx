import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, ShoppingBag, Check } from 'lucide-react';
import { RatingStars } from '../common/RatingStars';
import { useCart } from '../../context/CartContext';
import { useWishlist } from '../../context/WishlistContext';

export const ProductCard = ({ product }) => {
  const { addToCart, cartItems } = useCart();
  const { toggleWishlist, isInWishlist } = useWishlist();

  const isFavorited = isInWishlist(product.id);
  const inCart = cartItems.some((item) => item.product.id === product.id);

  return (
    <div className="group relative bg-white/80 backdrop-blur-md rounded-3xl border border-black/8 hover:border-black/25 shadow-[0_6px_24px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.09)] transition-all duration-300 flex flex-col justify-between overflow-hidden">
      {/* Media Container with Glass Accents */}
      <div className="relative aspect-square overflow-hidden bg-neutral-100">
        <Link to={`/products/${product.id}`} className="block w-full h-full">
          <img
            src={product.thumbnail}
            alt={product.name}
            loading="lazy"
            className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
          />
        </Link>

        {/* Floating Glass Badges */}
        <div className="absolute top-3.5 left-3.5 flex flex-col gap-1.5 pointer-events-none">
          {product.discountPercent > 0 && (
            <span className="bg-black/90 text-white font-mono text-[11px] font-bold px-3 py-1 rounded-full shadow-sm backdrop-blur-md border border-white/20 tracking-wider">
              -{product.discountPercent}%
            </span>
          )}
          {product.isNew && (
            <span className="bg-white/95 text-black font-extrabold text-[10px] uppercase px-2.5 py-0.5 rounded-full shadow-sm backdrop-blur-md border border-black/10 tracking-widest">
              NEW
            </span>
          )}
        </div>

        {/* Wishlist Glass Button */}
        <button
          onClick={(e) => {
            e.preventDefault();
            toggleWishlist(product);
          }}
          aria-label={isFavorited ? 'Remove from wishlist' : 'Add to wishlist'}
          className={`absolute top-3.5 right-3.5 p-2.5 rounded-full transition-all duration-200 shadow-sm backdrop-blur-md border ${
            isFavorited
              ? 'bg-rose-50 border-rose-200 text-rose-500'
              : 'bg-white/85 border-black/10 text-neutral-600 hover:text-black hover:bg-white'
          }`}
        >
          <Heart
            className={`w-4.5 h-4.5 transition-transform active:scale-125 ${
              isFavorited ? 'fill-rose-500' : ''
            }`}
          />
        </button>
      </div>

      {/* Content Details with Increased Sizing */}
      <div className="p-5 flex flex-col flex-1 justify-between gap-3.5">
        <div>
          {/* Brand & Category */}
          <div className="flex items-center justify-between text-xs text-neutral-400 mb-1.5">
            <span className="font-extrabold uppercase tracking-wider text-neutral-500">
              {product.brand}
            </span>
            <span className="capitalize text-[11px] bg-black/5 text-neutral-700 px-2.5 py-0.5 rounded-md font-semibold">
              {product.category}
            </span>
          </div>

          {/* Title */}
          <Link
            to={`/products/${product.id}`}
            className="text-sm sm:text-base font-extrabold text-black hover:opacity-75 line-clamp-2 transition-opacity duration-200 leading-snug"
            title={product.name}
          >
            {product.name}
          </Link>

          {/* Rating */}
          <div className="mt-2.5">
            <RatingStars rating={product.rating} reviewCount={product.reviewCount} size="sm" />
          </div>
        </div>

        {/* Pricing & Add to Cart */}
        <div className="pt-3 border-t border-black/5 flex items-center justify-between gap-3">
          <div>
            <div className="flex items-baseline gap-2">
              <span className="text-lg sm:text-xl font-black text-black font-mono">
                ${product.price}
              </span>
              {product.originalPrice && product.originalPrice > product.price && (
                <span className="text-xs text-neutral-400 line-through font-mono">
                  ${product.originalPrice}
                </span>
              )}
            </div>
            {product.stock <= 20 && (
              <p className="text-[11px] text-neutral-500 font-semibold mt-0.5">
                Only {product.stock} units left
              </p>
            )}
          </div>

          {/* Minimalist Black Add Button */}
          <button
            onClick={() => addToCart(product, 1)}
            aria-label={`Add ${product.name} to bag`}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold transition-all duration-200 shadow-sm ${
              inCart
                ? 'bg-neutral-100 text-black border border-black/10'
                : 'bg-black text-white hover:bg-neutral-800 active:scale-95'
            }`}
          >
            {inCart ? (
              <>
                <Check className="w-4 h-4 text-emerald-600" />
                <span>In Bag</span>
              </>
            ) : (
              <>
                <ShoppingBag className="w-4 h-4" />
                <span>Add</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};
