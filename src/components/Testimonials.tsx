import { useEffect, useRef, useState } from 'react';
import 'swiper/css';
import 'swiper/css/autoplay';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useLanguage } from "../context/LanguageContext";

const testimonials = [
    {
      textKey: "testimonials.asgarth.text",
      nameKey: "Asgarth",
      roleKey: "testimonials.asgarth.role",
      image: "https://images.hive.blog/u/asgarth/avatar",
    },
    {
      textKey: "testimonials.starkerz.text",
      nameKey: "Starkerz",
      roleKey: "testimonials.starkerz.role",
      image: "https://images.hive.blog/u/starkerz/avatar",
    },
    {
      textKey: "testimonials.howo.text",
      nameKey: "Howo",
      roleKey: "testimonials.howo.role",
      image: "https://images.hive.blog/u/howo/avatar",
    },
    {
      textKey: "testimonials.vaultec.text",
      nameKey: "Vaultec",
      roleKey: "testimonials.vaultec.role",
      image: "https://images.hive.blog/u/vaultec/avatar",
    },
    {
      textKey: "testimonials.dan.text",
      nameKey: "Dan",
      roleKey: "testimonials.dan.role",
      image: "https://images.hive.blog/u/theycallmedan/avatar",
    },
    {
      textKey: "testimonials.yabapmatt.text",
      nameKey: "Yabapmatt",
      roleKey: "testimonials.yabapmatt.role",
      image: "https://images.hive.blog/u/yabapmatt/avatar",
    },
    {
      textKey: "testimonials.arcange.text",
      nameKey: "Arcange",
      roleKey: "testimonials.arcange.role",
      image: "https://images.hive.blog/u/arcange/avatar",
    },
  ];

const TestimonialsCarousel = () => {
  const { t, language } = useLanguage();
  const swiperRef = useRef(null);
  const [isMobileDevice, setIsMobileDevice] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const pauseTimerRef = useRef(null);
  
  // Duración de la pausa en milisegundos (5 segundos)
  const PAUSE_DURATION = 5000;

  // Detectar si es dispositivo móvil al cargar el componente
  useEffect(() => {
    const checkMobile = () => {
      return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    };
    setIsMobileDevice(checkMobile());
  }, []);

  // Limpiar el temporizador al desmontar el componente
  useEffect(() => {
    return () => {
      if (pauseTimerRef.current) {
        clearTimeout(pauseTimerRef.current);
      }
    };
  }, []);

  // Función para pausar temporalmente el slider en móvil
  const handleTemporaryPause = () => {
    if (!isMobileDevice) return;
    
    // Pausar el slider
    setIsPaused(true);
    
    // Limpiar cualquier temporizador existente
    if (pauseTimerRef.current) {
      clearTimeout(pauseTimerRef.current);
    }
    
    // Configurar un nuevo temporizador para reanudar después de PAUSE_DURATION
    pauseTimerRef.current = setTimeout(() => {
      setIsPaused(false);
      pauseTimerRef.current = null;
    }, PAUSE_DURATION);
  };

  // Check if current language is not English
  const showTranslationBadge = language !== 'en';

  return (
    <section id="testimonials" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          {t("testimonials.title")}
        </h2>
        <Swiper
          ref={swiperRef}
          className='pb-12 pt-6'
          modules={[Autoplay]}
          spaceBetween={30}
          slidesPerView={3}
          autoplay={!isPaused ? {
            delay: 3000,
            disableOnInteraction: false,
            pauseOnMouseEnter: !isMobileDevice, // Solo activar en desktop
          } : false}
          speed={1000}
          loop={true}
          breakpoints={{
            320: {
              slidesPerView: 1,
            },
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div 
                className="bg-white border border-gray-300 border-opacity-25 p-8 rounded-lg shadow-blue-100 shadow-xl text-left max-w-[500px] mx-auto transform transition-transform hover:scale-105 relative"
                onClick={handleTemporaryPause}
              >
                {showTranslationBadge && (
                  <div className="absolute top-2 right-2 mb-2 bg-red-100 text-gray-700 text-xs px-2 py-1 rounded-md flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                    </svg>
                    {t("testimonials.translatedFrom") || "Translated from English"}
                  </div>
                )}
                <p className="mb-8 text-lg mt-2">{t(testimonial.textKey)}</p>
                <div className="flex items-center justify-start mt-6">
                  <img
                    src={testimonial.image}
                    alt={testimonial.nameKey}
                    className="w-16 h-16 rounded-full mr-4"
                  />
                  <div>
                    <h3 className="font-bold">{testimonial.nameKey}</h3>
                    <p className="text-gray-600 text-sm">{t(testimonial.roleKey)}</p>
                  </div>
                </div>
                {isMobileDevice && isPaused && (
                  <div className="absolute top-2 left-2 bg-blue-500 text-white text-xs px-2 py-1 rounded-full">
                    {t("testimonials.paused") || "Paused"}
                  </div>
                )}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default TestimonialsCarousel;