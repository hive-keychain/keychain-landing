import React, { useState, useEffect } from 'react';
import EcosystemCard from './EcosystemCard';
import EcosystemCarousel from './EcosystemCarousel';
import CategoryFilter from './CategoryFilter';
import { AppCategory, EcosystemApp } from './EcosystemData';

const categories: AppCategory[] = ['Social', 'Gaming', 'NFT', 'Finance', 'Tool'];

const EcosystemSection = () => {
  const [selectedCategory, setSelectedCategory] = useState<AppCategory>('Social');
  const [apps, setApps] = useState<EcosystemApp[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchApps = async () => {
      try {
        const response = await fetch('https://api.hive-keychain.com/hive/ecosystem/dapps');
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        
        // Flatten the data to get all dapps in a single array
        interface CategoryResponse {
  dapps: EcosystemApp[];
}
const allDapps = data.flatMap((categoryData: CategoryResponse) => categoryData.dapps);
setApps(allDapps);
        setApps(allDapps);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchApps();
  }, []);

const filteredApps = apps.filter(app => 
  app.categories.some(category => 
    category.toLowerCase() === selectedCategory.toLowerCase()
  )
);
  const cards = filteredApps.map((app) => (
    <EcosystemCard key={app.name} {...app} />
  ));

  if (loading) {
  return (
    <div className="text-center py-8">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
      <p className="mt-4 font-bold">Loading Ecosystem...</p>
    </div>
  );
}

  if (error) {
    return <p>Error: {error}</p>;
  }

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