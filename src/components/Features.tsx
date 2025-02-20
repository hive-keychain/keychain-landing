import React from 'react';
import { Shield, UserCheck, Laptop } from 'lucide-react';
import { AnimatedSection } from './AnimatedSection';
import { useLanguage } from '../context/LanguageContext';

const Features = () => {
  const { t } = useLanguage();
  const features = [
    {
      icon: Shield,
      title: t('features.secure.title'),
      description: t('features.secure.description'),
    },
    {
      icon: UserCheck,
      title: t('features.user_friendly.title'),
      description: t('features.user_friendly.description'),
    },
    {
      icon: Laptop,
      title: t('features.cross_platform.title'),
      description: t('features.cross_platform.description'),
    },
  ];

  return (
    <section id="why" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <AnimatedSection className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">
            {t('features.title')}
          </h2>
        </AnimatedSection>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <AnimatedSection
              key={index}
              direction="up"
              delay={index * 200}
              className="flex flex-col items-center text-center p-6 rounded-lg hover:shadow-lg transition-shadow"
            >
              <feature.icon size={48} className="text-red-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;