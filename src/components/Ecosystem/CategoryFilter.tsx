import React from 'react';
import { AppCategory } from './EcosystemData';
import { useLanguage } from '../../context/LanguageContext';

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
  const { t } = useLanguage();

  // Función para traducir categorías
  const translateCategory = (category: AppCategory): string => {
    if (category === 'Social') {
      return t('ecosystem.social');
    } else if (category === 'Gaming') {
      return t('ecosystem.games');
    } else if (category === 'NFT') {
      return t('ecosystem.nft');
    } else if (category === 'Finance') {
      return t('ecosystem.finance');
    } else if (category === 'Tool') {
      return t('ecosystem.tools');
    }
    return category; // Retorna el valor original si no hay traducción
  };

  return (
    <div className="flex flex-wrap justify-center gap-4 mb-8">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onSelectCategory(category)}
          className={`px-6 py-2 rounded-full transition-all first-letter:uppercase ${
            selectedCategory === category
              ? 'bg-red-600 text-white shadow-md'
              : 'bg-white text-gray-600 hover:bg-gray-100'
          }`}
        >
          {translateCategory(category)}
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;