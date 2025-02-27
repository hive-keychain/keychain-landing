import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import { Autoplay } from 'swiper/modules';
import { useLanguage } from "../context/LanguageContext"

const testimonials = [
  {
    text: "Hive Keychain is the best Hive wallet and the easiest way to interact with the Hive ecosystem both on desktop and mobile.",
    name: "Asgarth",
    role: "Co-founder of Peakd and Peakmonsters",
    image: "https://images.hive.blog/u/asgarth/avatar",
  },
  {
    text: "The cross-platform support is fantastic. I can access my accounts from anywhere!",
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
];

const TestimonialsCarousel = () => {

  const { t } = useLanguage()

  return (
    <section id="testimonials" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          { t("testimonials.title") }
        </h2>
        <Swiper
          className='pb-12 pt-6'
          modules={[Autoplay]}
          spaceBetween={30}
          slidesPerView={3}
          autoplay={{ delay: 0, disableOnInteraction: false }}
          speed={3000}
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
              <div className="bg-white border border-red-300 border-opacity-25 p-8 rounded-lg shadow-blue-100 shadow-xl text-left max-w-xs mx-auto transform transition-transform hover:scale-105">
                <p className="mb-8 text-xl">{testimonial.text}</p>
                <div className="flex items-center justify-start mt-6">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full mr-4"
                  />
                  <div>
                    <h3 className="font-bold">{testimonial.name}</h3>
                    <p className="text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default TestimonialsCarousel;