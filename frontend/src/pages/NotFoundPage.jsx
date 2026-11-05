import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Search, ArrowRight } from 'lucide-react';

export const NotFoundPage = () => {
  return (
    <div className="max-w-md mx-auto text-center py-24 px-4">
      <div className="w-20 h-20 rounded-3xl bg-slate-100 flex items-center justify-center mx-auto mb-6 text-slate-400">
        <Search className="w-10 h-10" />
      </div>
      <span className="text-xs font-bold uppercase tracking-widest text-brand-600">Error 404</span>
      <h1 className="text-3xl font-extrabold text-slate-900 mt-1 mb-3">Page Not Found</h1>
      <p className="text-xs text-slate-500 mb-8 leading-relaxed">
        The destination you are looking for has been moved, renamed, or is temporarily unavailable.
      </p>
      <div className="flex items-center justify-center gap-3">
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-6 py-3 bg-brand-600 hover:bg-brand-700 text-white rounded-full text-xs font-bold transition shadow-sm"
        >
          <Home className="w-4 h-4" />
          <span>Go to Homepage</span>
        </Link>
        <Link
          to="/products"
          className="inline-flex items-center gap-1 px-5 py-3 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-full text-xs font-bold transition"
        >
          <span>Catalog</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </div>
  );
};
