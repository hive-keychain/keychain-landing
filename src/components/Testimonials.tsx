import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import { Autoplay } from 'swiper/modules';

const testimonials = [
  {
    text: "Hive Keychain has revolutionized the way I interact with the Hive ecosystem. It's secure and easy to use!",
    name: "Alice Johnson",
    role: "Blockchain Enthusiast",
    image: "https://files.peakd.com/file/peakd-hive/manuphotos/IMG_5767.jpeg",
  },
  {
    text: "The cross-platform support is fantastic. I can access my accounts from anywhere!",
    name: "Bob Smith",
    role: "Crypto Trader",
    image: "https://files.peakd.com/file/peakd-hive/manuphotos/IMG_5767.jpeg",
  },
  {
    text: "I love the user-friendly interface. It's perfect for both beginners and experts.",
    name: "Charlie Brown",
    role: "Tech Blogger",
    image: "https://files.peakd.com/file/peakd-hive/manuphotos/IMG_5767.jpeg",
  },
  {
    text: "The security features are top-notch. I feel safe using Hive Keychain for all my transactions.",
    name: "Diana Prince",
    role: "Security Analyst",
    image: "https://files.peakd.com/file/peakd-hive/manuphotos/IMG_5767.jpeg",
  },
  {
    text: "Hive Keychain's user experience is unmatched. It's intuitive and easy to navigate.",
    name: "Ethan Hunt",
    role: "UX Designer",
    image: "https://files.peakd.com/file/peakd-hive/manuphotos/IMG_5767.jpeg",
  },
  {
    text: "I appreciate the constant updates and improvements. The team is doing a great job!",
    name: "Fiona Gallagher",
    role: "Product Manager",
    image: "https://files.peakd.com/file/peakd-hive/manuphotos/IMG_5767.jpeg",
  },
];

const TestimonialsCarousel = () => {
  return (
    <section id="testimonials" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          What People Are Saying
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
                <p className="mb-8 text-medium">{testimonial.text}</p>
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