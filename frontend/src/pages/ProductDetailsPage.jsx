import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import {
  ShoppingBag,
  Heart,
  Truck,
  ShieldCheck,
  RotateCcw,
  Check,
  ChevronRight,
  Zap,
  Share2
} from 'lucide-react';
import { RatingStars } from '../components/common/RatingStars';
import { ProductCard } from '../components/product/ProductCard';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';
import { useToast } from '../context/ToastContext';
import { api } from '../services/api';

export const ProductDetailsPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const { toggleWishlist, isInWishlist } = useWishlist();
  const { addToast } = useToast();

  const [product, setProduct] = useState(null);
  const [related, setRelated] = useState([]);
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeTab, setActiveTab] = useState('description');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  useEffect(() => {
    setLoading(true);
    setError(null);
    setSelectedImage(0);
    setQuantity(1);

    api.getProduct(id)
      .then((res) => {
        setProduct(res.data);
        return api.getRelatedProducts(res.data.id);
      })
      .then((relatedRes) => {
        setRelated(relatedRes.data || []);
      })
      .catch((err) => {
        console.error('Error fetching product:', err);
        setError('The requested piece could not be loaded.');
      })
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 animate-pulse">
          <div className="aspect-square bg-neutral-200 rounded-3xl"></div>
          <div className="space-y-4">
            <div className="h-4 bg-neutral-200 rounded w-1/4"></div>
            <div className="h-8 bg-neutral-200 rounded w-3/4"></div>
            <div className="h-5 bg-neutral-200 rounded w-1/3"></div>
            <div className="h-24 bg-neutral-100 rounded-2xl"></div>
            <div className="h-12 bg-neutral-200 rounded-xl w-1/2"></div>
          </div>
        </div>
      </div>
    );
  }

  if (error || !product) {
    return (
      <div className="max-w-xl mx-auto px-4 py-20 text-center">
        <h2 className="text-2xl font-bold text-black mb-2">Item Not Found</h2>
        <p className="text-xs text-neutral-500 mb-6">{error || 'This piece may have been retired.'}</p>
        <Link
          to="/products"
          className="px-6 py-2.5 bg-black text-white rounded-full text-xs font-bold hover:bg-neutral-800 transition"
        >
          Return to Catalog
        </Link>
      </div>
    );
  }

  const isFavorited = isInWishlist(product.id);
  const images = product.images && product.images.length > 0 ? product.images : [product.thumbnail];

  const handleBuyNow = () => {
    addToCart(product, quantity, false);
    navigate('/checkout');
  };

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      addToast('Item link copied to clipboard!', 'info');
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Breadcrumb Navigation */}
      <nav aria-label="Breadcrumb" className="text-xs text-neutral-400 flex items-center gap-2 mb-8">
        <Link to="/" className="hover:text-black transition">Home</Link>
        <ChevronRight className="w-3.5 h-3.5" />
        <Link to="/products" className="hover:text-black transition">Products</Link>
        <ChevronRight className="w-3.5 h-3.5" />
        <Link to={`/products?category=${product.category}`} className="hover:text-black capitalize transition">
          {product.category}
        </Link>
        <ChevronRight className="w-3.5 h-3.5" />
        <span className="text-black font-semibold truncate max-w-xs">{product.name}</span>
      </nav>

      {/* Main Showcase Section */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Column: Image Gallery (7 Cols) */}
        <div className="lg:col-span-7 flex flex-col-reverse sm:flex-row gap-4">
          {images.length > 1 && (
            <div className="flex sm:flex-col gap-3 overflow-x-auto sm:overflow-visible shrink-0">
              {images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImage(idx)}
                  className={`w-20 h-20 rounded-xl overflow-hidden border-2 transition-all ${
                    selectedImage === idx
                      ? 'border-black shadow-md'
                      : 'border-black/10 hover:border-black/30 opacity-60 hover:opacity-100'
                  }`}
                >
                  <img src={img} alt={`Thumbnail ${idx + 1}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          )}

          {/* Large Showcase Image */}
          <div className="relative flex-1 aspect-square rounded-3xl overflow-hidden bg-neutral-100 border border-black/8 shadow-sm">
            <img
              src={images[selectedImage]}
              alt={product.name}
              className="w-full h-full object-cover object-center transition-all duration-300"
            />
            {product.discountPercent > 0 && (
              <span className="absolute top-4 left-4 bg-black/90 backdrop-blur-md text-white font-mono font-bold text-xs px-3 py-1 rounded-full shadow tracking-wide border border-white/20">
                SAVE {product.discountPercent}%
              </span>
            )}
            <button
              onClick={handleShare}
              className="absolute top-4 right-4 p-2.5 bg-white/80 backdrop-blur-md text-neutral-600 hover:text-black rounded-full shadow-sm hover:bg-white transition border border-black/5"
              title="Share item"
              aria-label="Share item"
            >
              <Share2 className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Right Column: Buying Decision (5 Cols) */}
        <div className="lg:col-span-5 space-y-6">
          <div>
            <div className="flex items-center justify-between text-xs text-neutral-400 mb-2">
              <span className="font-bold uppercase tracking-wider text-black">
                {product.brand}
              </span>
              <span className="capitalize bg-black/5 text-black px-2.5 py-0.5 rounded-full font-bold">
                {product.category}
              </span>
            </div>

            <h1 className="text-2xl sm:text-3xl font-black text-black tracking-tight leading-snug">
              {product.name}
            </h1>

            {/* Rating & In-stock badge */}
            <div className="mt-3 flex items-center gap-3">
              <RatingStars rating={product.rating} reviewCount={product.reviewCount} size="md" />
              <span className="text-neutral-200">|</span>
              <span className="text-xs text-black font-bold flex items-center gap-1">
                <Check className="w-3.5 h-3.5 text-emerald-600" />
                In Stock ({product.stock} units)
              </span>
            </div>
          </div>

          {/* Frosted Glass Pricing Box */}
          <div className="p-4 bg-white/80 backdrop-blur-xl rounded-2xl border border-black/8 flex items-baseline justify-between shadow-sm">
            <div>
              <div className="flex items-baseline gap-3">
                <span className="text-3xl font-black text-black font-mono">
                  ${product.price}
                </span>
                {product.originalPrice && product.originalPrice > product.price && (
                  <span className="text-sm text-neutral-400 line-through font-mono">
                    ${product.originalPrice}
                  </span>
                )}
              </div>
              {product.originalPrice && (
                <p className="text-[11px] text-neutral-600 font-bold mt-0.5">
                  Savings: ${(product.originalPrice - product.price).toFixed(2)} ({product.discountPercent}% off)
                </p>
              )}
            </div>
            <span className="text-[10px] uppercase font-bold tracking-wider bg-black text-white px-2.5 py-1 rounded-full">
              Tax Included
            </span>
          </div>

          <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed font-normal">
            {product.shortDescription}
          </p>

          {/* Quantity + Buttons */}
          <div className="space-y-3 pt-2">
            <div className="flex items-center gap-4">
              <span className="text-xs font-bold text-black uppercase tracking-wider">Quantity</span>
              <div className="flex items-center border border-black/10 rounded-xl bg-white/80 backdrop-blur-md overflow-hidden shadow-sm">
                <button
                  type="button"
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="px-3 py-1.5 text-black hover:bg-black/5 transition text-sm font-bold"
                  aria-label="Decrease quantity"
                >
                  -
                </button>
                <span className="px-4 py-1.5 text-xs font-bold text-black font-mono">
                  {quantity}
                </span>
                <button
                  type="button"
                  onClick={() => setQuantity((q) => Math.min(product.stock, q + 1))}
                  className="px-3 py-1.5 text-black hover:bg-black/5 transition text-sm font-bold"
                  aria-label="Increase quantity"
                >
                  +
                </button>
              </div>
            </div>

            {/* CTAs */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <button
                onClick={() => addToCart(product, quantity)}
                className="w-full py-3.5 px-6 bg-black hover:bg-neutral-800 active:scale-98 text-white rounded-xl text-xs font-bold transition flex items-center justify-center gap-2 shadow-sm"
              >
                <ShoppingBag className="w-4 h-4" />
                <span>Add to Bag</span>
              </button>

              <button
                onClick={handleBuyNow}
                className="w-full py-3.5 px-6 bg-neutral-900 hover:bg-black active:scale-98 text-white rounded-xl text-xs font-bold transition flex items-center justify-center gap-2 shadow-sm"
              >
                <Zap className="w-4 h-4 text-white" />
                <span>Instant Checkout</span>
              </button>
            </div>

            {/* Wishlist Glass CTA */}
            <button
              onClick={() => toggleWishlist(product)}
              className={`w-full py-2.5 px-4 rounded-xl text-xs font-bold transition border flex items-center justify-center gap-2 backdrop-blur-md ${
                isFavorited
                  ? 'bg-rose-50 text-rose-600 border-rose-200'
                  : 'bg-white/80 text-black border-black/10 hover:bg-black/5'
              }`}
            >
              <Heart className={`w-4 h-4 ${isFavorited ? 'fill-rose-500' : ''}`} />
              <span>{isFavorited ? 'Saved in Wishlist' : 'Add to Wishlist'}</span>
            </button>
          </div>

          {/* Delivery & Assurance Perks in Frosted Glass */}
          <div className="p-4 rounded-2xl border border-black/8 bg-white/80 backdrop-blur-xl space-y-3 text-xs text-neutral-600 shadow-sm">
            <div className="flex items-center gap-3">
              <Truck className="w-4 h-4 text-black shrink-0" />
              <span>
                <strong className="text-black">Complimentary Delivery</strong> on this product. Arrives in 2-3 business days.
              </span>
            </div>
            <div className="flex items-center gap-3">
              <ShieldCheck className="w-4 h-4 text-black shrink-0" />
              <span>
                <strong className="text-black">{product.specs?.Warranty || '2-Year Official Warranty'}</strong> included automatically.
              </span>
            </div>
            <div className="flex items-center gap-3">
              <RotateCcw className="w-4 h-4 text-black shrink-0" />
              <span>
                <strong className="text-black">30-Day Hassle-Free Returns</strong> with pre-paid return shipping label.
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="mt-16 pt-8 border-t border-black/5">
        <div className="flex items-center gap-8 border-b border-black/5 pb-3">
          <button
            onClick={() => setActiveTab('description')}
            className={`text-xs font-bold uppercase tracking-wider pb-2 relative transition ${
              activeTab === 'description'
                ? 'text-black after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-black'
                : 'text-neutral-400 hover:text-black'
            }`}
          >
            Overview & Highlights
          </button>
          <button
            onClick={() => setActiveTab('specs')}
            className={`text-xs font-bold uppercase tracking-wider pb-2 relative transition ${
              activeTab === 'specs'
                ? 'text-black after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-black'
                : 'text-neutral-400 hover:text-black'
            }`}
          >
            Technical Specifications
          </button>
          <button
            onClick={() => setActiveTab('reviews')}
            className={`text-xs font-bold uppercase tracking-wider pb-2 relative transition ${
              activeTab === 'reviews'
                ? 'text-black after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-black'
                : 'text-neutral-400 hover:text-black'
            }`}
          >
            Verified Reviews ({product.reviewCount})
          </button>
        </div>

        {/* Tab Content */}
        <div className="py-8">
          {activeTab === 'description' && (
            <div className="space-y-6 max-w-4xl">
              <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed font-normal">
                {product.description}
              </p>

              {product.highlights && product.highlights.length > 0 && (
                <div>
                  <h3 className="text-[10px] font-bold uppercase tracking-wider text-black mb-3">
                    Engineered Highlights
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {product.highlights.map((item, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-2.5 p-3 rounded-xl bg-white/70 backdrop-blur-md border border-black/8"
                      >
                        <Check className="w-4 h-4 text-black shrink-0 mt-0.5" />
                        <span className="text-xs text-neutral-700 font-semibold">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {activeTab === 'specs' && (
            <div className="max-w-2xl bg-white/80 backdrop-blur-xl rounded-2xl border border-black/8 overflow-hidden shadow-sm">
              <table className="w-full text-xs text-left">
                <tbody>
                  {product.specs &&
                    Object.entries(product.specs).map(([key, val], idx) => (
                      <tr
                        key={key}
                        className={idx % 2 === 0 ? 'bg-black/2' : 'bg-white/60'}
                      >
                        <td className="py-3 px-4 font-bold text-neutral-500 border-b border-black/5 w-1/3">
                          {key}
                        </td>
                        <td className="py-3 px-4 text-black font-semibold border-b border-black/5 font-mono">
                          {val}
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          )}

          {activeTab === 'reviews' && (
            <div className="space-y-6 max-w-3xl">
              {product.reviews && product.reviews.length > 0 ? (
                product.reviews.map((rev) => (
                  <div
                    key={rev.id}
                    className="p-5 rounded-2xl bg-white/80 backdrop-blur-md border border-black/8 shadow-sm space-y-3"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-bold text-black">{rev.author}</span>
                        {rev.verified && (
                          <span className="text-[10px] bg-black text-white px-2 py-0.5 rounded-full font-bold">
                            Verified
                          </span>
                        )}
                      </div>
                      <span className="text-xs text-neutral-400">{rev.date}</span>
                    </div>
                    <RatingStars rating={rev.rating} showCount={false} />
                    <h4 className="text-xs font-bold text-black">{rev.title}</h4>
                    <p className="text-xs text-neutral-600 leading-relaxed italic font-normal">"{rev.comment}"</p>
                  </div>
                ))
              ) : (
                <p className="text-xs text-neutral-400">No reviews written yet.</p>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Related Products */}
      {related.length > 0 && (
        <div className="mt-16 pt-12 border-t border-black/5">
          <div className="mb-8">
            <span className="text-[10px] font-bold uppercase tracking-wider text-neutral-400">
              Complete Your Setup
            </span>
            <h2 className="text-2xl font-black text-black tracking-tight mt-1">
              Related Gear
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {related.map((item) => (
              <ProductCard key={item.id} product={item} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
