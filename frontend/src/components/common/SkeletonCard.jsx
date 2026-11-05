import React from 'react';

export const SkeletonCard = () => {
  return (
    <div className="bg-white rounded-2xl border border-slate-200/80 p-4 shadow-sm animate-pulse flex flex-col justify-between">
      <div>
        <div className="w-full aspect-square bg-slate-200 rounded-xl mb-4"></div>
        <div className="h-3 bg-slate-200 rounded w-1/4 mb-2"></div>
        <div className="h-4 bg-slate-200 rounded w-3/4 mb-2"></div>
        <div className="h-3 bg-slate-100 rounded w-1/2 mb-4"></div>
      </div>
      <div>
        <div className="h-5 bg-slate-200 rounded w-1/3 mb-3"></div>
        <div className="h-9 bg-slate-200 rounded-xl w-full"></div>
      </div>
    </div>
  );
};
