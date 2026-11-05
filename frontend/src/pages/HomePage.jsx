import React from 'react';
import { HeroBanner } from '../components/home/HeroBanner';
import { CategoryGrid } from '../components/home/CategoryGrid';
import { FeaturedSection } from '../components/home/FeaturedSection';
import { PromoBanner } from '../components/home/PromoBanner';

export const HomePage = () => {
  return (
    <div className="space-y-6">
      <HeroBanner />
      <CategoryGrid />
      <FeaturedSection />
      <PromoBanner />
    </div>
  );
};
