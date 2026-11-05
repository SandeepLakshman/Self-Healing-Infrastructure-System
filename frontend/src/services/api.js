const API_BASE = '/api';

export const api = {
  // Fetch products with search, category, filter, and sorting
  async getProducts(params = {}) {
    const query = new URLSearchParams();
    Object.entries(params).forEach(([key, val]) => {
      if (val !== undefined && val !== null && val !== '') {
        query.append(key, val);
      }
    });

    const res = await fetch(`${API_BASE}/products?${query.toString()}`);
    if (!res.ok) throw new Error('Failed to fetch products');
    return res.json();
  },

  // Fetch single product by id or slug
  async getProduct(id) {
    const res = await fetch(`${API_BASE}/products/${id}`);
    if (!res.ok) throw new Error(`Product not found`);
    return res.json();
  },

  // Fetch related products
  async getRelatedProducts(id) {
    const res = await fetch(`${API_BASE}/products/${id}/related`);
    if (!res.ok) return { data: [] };
    return res.json();
  },

  // Fetch all categories
  async getCategories() {
    const res = await fetch(`${API_BASE}/products/categories`);
    if (!res.ok) throw new Error('Failed to fetch categories');
    return res.json();
  },

  // Fetch featured products
  async getFeatured() {
    const res = await fetch(`${API_BASE}/products/featured`);
    if (!res.ok) throw new Error('Failed to fetch featured products');
    return res.json();
  },

  // Fetch trending products
  async getTrending() {
    const res = await fetch(`${API_BASE}/products/trending`);
    if (!res.ok) throw new Error('Failed to fetch trending products');
    return res.json();
  },

  // Place demo order
  async createOrder(orderPayload) {
    const res = await fetch(`${API_BASE}/orders`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(orderPayload)
    });
    if (!res.ok) {
      const errData = await res.json().catch(() => ({}));
      throw new Error(errData.message || 'Failed to place order');
    }
    return res.json();
  },

  // Backend Health check (useful for system info pill & k8s demo)
  async getHealth() {
    try {
      const res = await fetch(`${API_BASE}/health`);
      return res.json();
    } catch (err) {
      return { status: 'offline', error: err.message };
    }
  }
};
