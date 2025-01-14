import React from 'react';
import { Download } from 'lucide-react';
import { AnimatedSection } from './AnimatedSection';
import { FloatingImage } from './FloatingImage';

const Hero = () => {
  return (
    <section className="pt-24 pb-16 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <AnimatedSection direction="left" className="flex-1 md:text-left text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Your gateway to the Hive ecosystem
            </h1>
            <h2 className="text-xl md:text-2xl text-gray-600 mb-1">
              Secure. Simple. Powerful.
            </h2>
            {/* <a
              href="#download"
              className="inline-flex items-center space-x-2 bg-red-600 text-white px-8 py-4 rounded-lg hover:bg-red-700 transition-colors text-lg"
            >
              <Download size={24} />
              <span>Download Now</span>
            </a> */}
            <p className="text-gray-600">
              Available on iOS, Android, Chrome, Brave, and Firefox
            </p>
          </AnimatedSection>
          <AnimatedSection direction="right" className="flex-1">
            <FloatingImage
              src="/heroimage.svg"
              alt="Hive Keychain Mobile App"
              className="max-w-full mx-auto"
            />
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default Hero;