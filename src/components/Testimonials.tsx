
import React, { useState, useRef, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import { Autoplay } from 'swiper/modules';
import { useLanguage } from "../context/LanguageContext";

const testimonials = [
  {
    text: "Hive Keychain is the best Hive wallet and the easiest way to interact with the Hive ecosystem both on desktop and mobile.",
    name: "Asgarth",
    role: "Co-founder of Peakd and Peakmonsters",
    image: "https://images.hive.blog/u/asgarth/avatar",
  },
  {
    text: "From secure blockchain signatures, payments, using their in wallet browser to get cash back on purchases & quickly signing up & adding account data to the blockchain for posting content with my BTC account, Hive Keychain is one of our recommended go to apps in the Hive ecosystem!",
    name: "Starkerz",
    role: "Founder of 3Speaktv",
    image: "https://images.hive.blog/u/starkerz/avatar",
  },
  {
    text: "I use Keychain daily to interact with the chain! It's the best out there.",
    name: "Howo",
    role: "Core dev of Hive blockchain",
    image: "https://images.hive.blog/u/howo/avatar",
  },
  {
    text: "Keychain is the ultimate wallet interface for the hive Blockchain. We look forward  to working on bringing the world of cross chain to Hive",
    name: "Vaultec",
    role: "Founder of VSC Network",
    image: "https://images.hive.blog/u/vaultec/avatar",
  },
  {
    text: "I use Hive keychain everyday. I started using their mobile browser as well more and more, it makes hiving better. It does so much, and it just works. First step to hiving is downloading Hive keychain.",
    name: "Dan",
    role: "Co-Founder 3Speaktv",
    image: "https://images.hive.blog/u/theycallmedan/avatar",
  },
  {
    text: "Hive Keychain is probably the most important tool in the entire Hive ecosystem. Hive is made to power web3 applications and Keychain is what allows users to easily and securely interact with those apps on both desktop and mobile. Without it, the user experience for Splinterlands and all Hive applications would be considerably worse and I don't think we would have had nearly the level of success that we have had.",
    name: "Yabapmatt",
    role: "CEO of Splinterlands",
    image: "https://images.hive.blog/u/yabapmatt/avatar",
  },
];

const TestimonialsCarousel = () => {
  const { t } = useLanguage();
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
                className="bg-white border border-gray-300 border-opacity-25 p-8 rounded-lg shadow-blue-100 shadow-xl text-left max-w-[500px] mx-auto transform transition-transform hover:scale-105"
                onClick={handleTemporaryPause}
              >
                <p className="mb-8 text-lg">{testimonial.text}</p>
                <div className="flex items-center justify-start mt-6">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full mr-4"
                  />
                  <div>
                    <h3 className="font-bold">{testimonial.name}</h3>
                    <p className="text-gray-600 text-sm">{testimonial.role}</p>
                  </div>
                </div>
                {isMobileDevice && isPaused && (
                  <div className="absolute top-2 right-2 bg-blue-500 text-white text-xs px-2 py-1 rounded-full">
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
