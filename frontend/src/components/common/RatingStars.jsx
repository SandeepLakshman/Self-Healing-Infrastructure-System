import React from 'react';
import { Star } from 'lucide-react';

export const RatingStars = ({ rating = 5, reviewCount, size = 'sm', showCount = true }) => {
  const iconSize = size === 'sm' ? 'w-3.5 h-3.5' : size === 'lg' ? 'w-5 h-5' : 'w-4 h-4';

  return (
    <div className="flex items-center gap-1.5">
      <div className="flex items-center text-amber-400">
        {[1, 2, 3, 4, 5].map((starIndex) => {
          const filled = starIndex <= Math.round(rating);
          return (
            <Star
              key={starIndex}
              className={`${iconSize} ${
                filled ? 'fill-amber-400 text-amber-400' : 'text-slate-300'
              }`}
            />
          );
        })}
      </div>
      <span className="text-xs font-bold text-slate-700 ml-0.5">
        {rating.toFixed(1)}
      </span>
      {showCount && reviewCount !== undefined && (
        <span className="text-xs text-slate-400">
          ({reviewCount.toLocaleString()})
        </span>
      )}
    </div>
  );
};
