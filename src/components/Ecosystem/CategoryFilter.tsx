import React from 'react';
import { AppCategory } from './EcosystemData';

interface CategoryFilterProps {
  categories: AppCategory[];
  selectedCategory: AppCategory;
  onSelectCategory: (category: AppCategory) => void;
}

const CategoryFilter: React.FC<CategoryFilterProps> = ({
  categories,
  selectedCategory,
  onSelectCategory,
}) => {
  return (
    <div className="flex flex-wrap justify-center gap-4 mb-8">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onSelectCategory(category)}
          className={`px-6 py-2 rounded-full transition-all ${
            selectedCategory === category
              ? 'bg-red-600 text-white shadow-md'
              : 'bg-white text-gray-600 hover:bg-gray-100'
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;