import React from 'react';
import { AnimatedSection } from '../AnimatedSection';

interface EcosystemCardProps {
  name: string;
  description: string;
  icon: string; 
  url: string;
}

const EcosystemCard: React.FC<EcosystemCardProps> = ({ name, description, icon, url }) => (
  <AnimatedSection direction="up" className="group">
    <a 
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="block p-4 bg-white rounded-xl shadow-md hover:shadow-xl transition-all transform hover:-translate-y-1 h-full flex flex-col justify-between min-h-[250px] max-w-[290px]" // Establecemos una altura mínima consistente
    >
      <div className="flex flex-col items-center h-full">
        {/* Imagen */}
        <img src={icon} alt={name} className="h-32 w-32 mx-auto mb-4 object-contain rounded-xl" loading='lazy' />
        
        {/* Título */}
        <h3 className="text-xl font-semibold text-center mb-2 group-hover:text-red-500 transition-colors">
          {name}
        </h3>
        
        {/* Descripción */}
        <p className="text-gray-600 text-center text-sm flex-grow overflow-hidden text-ellipsis">
          {description}
        </p>
      </div>
    </a>
  </AnimatedSection>
);

export default EcosystemCard;