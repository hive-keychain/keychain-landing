import React, { useState } from 'react';
import EcosystemCard from './EcosystemCard';
import EcosystemCarousel from './EcosystemCarousel';
import CategoryFilter from './CategoryFilter';
import { ecosystemData, AppCategory } from './EcosystemData';

const categories: AppCategory[] = ['Social', 'Games', 'NFT', 'DeFi', 'Tools'];

const EcosystemSection = () => {
  const [selectedCategory, setSelectedCategory] = useState<AppCategory>('Social');

  const filteredApps = ecosystemData.filter(app => app.category === selectedCategory);
  const cards = filteredApps.map((app) => (
    <EcosystemCard key={app.name} {...app} />
  ));

  return (
    <section id="ecosystem" className="py-16 bg-white">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Hive Ecosystem
        </h2>
        <p className="text-gray-600 text-center mb-8 max-w-2xl mx-auto px-4">
          Discover the powerful applications that integrate with Hive Keychain
        </p>
        <CategoryFilter
          categories={categories}
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
        />
        <EcosystemCarousel itemsPerSlide={4}>
          {cards}
        </EcosystemCarousel>
      </div>
    </section>
  );
};

export default EcosystemSection;