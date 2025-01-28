import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface CarouselProps {
  children: React.ReactNode[];
  itemsPerSlide: number;
}

const EcosystemCarousel: React.FC<CarouselProps> = ({ children, itemsPerSlide }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [dynamicItemsPerSlide, setDynamicItemsPerSlide] = useState(itemsPerSlide);
  const totalSlides = Math.ceil(children.length / dynamicItemsPerSlide);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    const touchEnd = e.changedTouches[0].clientX;
    if (touchStart - touchEnd > 50) nextSlide();
    if (touchStart - touchEnd < -50) prevSlide();
  };

  useEffect(() => {
    const updateItemsPerSlide = () => {
      if (window.innerWidth < 768) {
        setDynamicItemsPerSlide(1); // Show 2 cards per slide for small screens
      } else {
        setDynamicItemsPerSlide(itemsPerSlide); // Default value for larger screens
      }
    };

    updateItemsPerSlide();
    window.addEventListener('resize', updateItemsPerSlide);

    return () => {
      window.removeEventListener('resize', updateItemsPerSlide);
    };
  }, [itemsPerSlide]);

  useEffect(() => {
    const interval = setInterval(nextSlide, 15000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setCurrentSlide(0);
  }, [children.length, dynamicItemsPerSlide]);

  if (children.length === 0) {
    return (
      <div className="text-center py-8 text-gray-500">
        No applications found in this category
      </div>
    );
  }

  return (
    <div className="relative group">
      <div
        className="overflow-hidden"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${currentSlide * 100}%)`,
          }}
        >
          {Array.from({ length: totalSlides }).map((_, index) => {
            const currentSlideItems = children.slice(
              index * dynamicItemsPerSlide,
              (index + 1) * dynamicItemsPerSlide
            );
            return (
              <div
                key={index}
                className={`min-w-full flex gap-6 px-4 py-5 justify-center ${
                  currentSlideItems.length < dynamicItemsPerSlide ? 'md:justify-start' : 'md:justify-between'
                }`}
              >
                {currentSlideItems.map((child, childIndex) => (
                  <div
                    key={childIndex}
                    className="flex-1 flex-shrink-0 max-w-[290px] flex flex-col justify-between"
                    style={{ flexBasis: `${100 / dynamicItemsPerSlide}%` }} // Ensure equal width for all cards
                  >
                    {child}
                  </div>
                ))}
              </div>
            );
          })}
        </div>
      </div>

      {totalSlides > 1 && (
        <>
          <button
            onClick={prevSlide}
            className="absolute left-[30px] md:left-[-16px] top-1/2 -translate-y-1/2 -translate-x-1/2 bg-white p-2 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-6 h-6 text-gray-600" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-[30px] md:right-[-16px] top-1/2 -translate-y-1/2 translate-x-1/2 bg-white p-2 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity"
            aria-label="Next slide"
          >
            <ChevronRight className="w-6 h-6 text-gray-600" />
          </button>

          <div className="flex justify-center mt-6 space-x-2">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  currentSlide === index ? 'bg-red-600 w-4' : 'bg-gray-300'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default EcosystemCarousel;