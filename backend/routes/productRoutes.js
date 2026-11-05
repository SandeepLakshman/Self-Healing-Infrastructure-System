import express from 'express';
import { products } from '../data/products.js';
import { categories } from '../data/categories.js';

const router = express.Router();

// GET all categories
router.get('/categories', (req, res) => {
  res.json({
    success: true,
    data: categories
  });
});

// GET featured products
router.get('/featured', (req, res) => {
  const featured = products.filter(p => p.featured);
  res.json({
    success: true,
    count: featured.length,
    data: featured
  });
});

// GET trending products
router.get('/trending', (req, res) => {
  const trending = products.filter(p => p.trending);
  res.json({
    success: true,
    count: trending.length,
    data: trending
  });
});

// GET products with query filtering & sorting
router.get('/', (req, res) => {
  let result = [...products];
  const { category, search, minPrice, maxPrice, minRating, sort, inStock, limit, page } = req.query;

  // Search filter
  if (search && search.trim() !== '') {
    const q = search.trim().toLowerCase();
    result = result.filter(p => 
      p.name.toLowerCase().includes(q) ||
      p.brand.toLowerCase().includes(q) ||
      p.shortDescription.toLowerCase().includes(q) ||
      p.category.toLowerCase().includes(q)
    );
  }

  // Category filter
  if (category && category !== 'all') {
    result = result.filter(p => p.category.toLowerCase() === category.toLowerCase());
  }

  // Price range filter
  if (minPrice) {
    const min = parseFloat(minPrice);
    if (!isNaN(min)) {
      result = result.filter(p => p.price >= min);
    }
  }
  if (maxPrice) {
    const max = parseFloat(maxPrice);
    if (!isNaN(max)) {
      result = result.filter(p => p.price <= max);
    }
  }

  // Rating filter
  if (minRating) {
    const rating = parseFloat(minRating);
    if (!isNaN(rating)) {
      result = result.filter(p => p.rating >= rating);
    }
  }

  // Stock filter
  if (inStock === 'true') {
    result = result.filter(p => p.inStock);
  }

  // Sorting
  switch (sort) {
    case 'price-low':
      result.sort((a, b) => a.price - b.price);
      break;
    case 'price-high':
      result.sort((a, b) => b.price - a.price);
      break;
    case 'rating':
      result.sort((a, b) => b.rating - a.rating);
      break;
    case 'newest':
      result.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0));
      break;
    case 'popular':
    case 'reviews':
      result.sort((a, b) => b.reviewCount - a.reviewCount);
      break;
    default:
      // Default: featured first, then rating
      result.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0) || b.rating - a.rating);
      break;
  }

  const total = result.length;
  const pageNum = parseInt(page, 10) || 1;
  const limitNum = parseInt(limit, 10) || 50;
  const startIndex = (pageNum - 1) * limitNum;
  const paginatedResult = result.slice(startIndex, startIndex + limitNum);

  res.json({
    success: true,
    total,
    page: pageNum,
    totalPages: Math.ceil(total / limitNum),
    data: paginatedResult
  });
});

// GET single product by ID or slug
router.get('/:id', (req, res) => {
  const { id } = req.params;
  const product = products.find(p => p.id === id || p.slug === id);

  if (!product) {
    return res.status(404).json({
      success: false,
      message: `Product with identifier '${id}' not found.`
    });
  }

  res.json({
    success: true,
    data: product
  });
});

// GET related products
router.get('/:id/related', (req, res) => {
  const { id } = req.params;
  const product = products.find(p => p.id === id || p.slug === id);

  if (!product) {
    return res.status(404).json({
      success: false,
      message: 'Product not found.'
    });
  }

  const related = products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  res.json({
    success: true,
    data: related
  });
});

export default router;
