import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css'; // Import Swiper styles

import pic1 from '../certificate/1.png';
import pic2 from '../certificate/2.png';
import pic3 from '../certificate/3.png';
import pic4 from '../certificate/4.png';
import pic5 from '../certificate/5.png';
import pic6 from '../certificate/6.png';
import pic7 from '../certificate/7.png';


const Certificate = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: false,
    });
  }, []);

  const certificates = [
    { id: 1, image: pic1 },
    { id: 2, image: pic2},
    { id: 3, image: pic7 },
    { id: 4, image: pic4 },
    { id: 5, image: pic6},
    { id: 6, image: pic5 },
    { id: 7, image: pic3 },
  ];

  return (
    <div className='p-6 md:p-24 pb-10 md:mx-20'>
      <h2 className='text-2xl text-center md:text-center md:text-3xl font-medium mb-4'>
        My Certificate
      </h2>
      
      <div className='w-full flex items-center justify-center md:items-center md:justify-center'>
        <div id='line1' className='mb-10' data-aos="fade-right"></div>
      </div>

      <div className='certificate-container' data-aos="zoom-in-right">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          spaceBetween={30}
          slidesPerView={3} 
          breakpoints={{
            // Responsive breakpoints
            320: { slidesPerView: 1, spaceBetween: 20 }, // For mobile
            768: { slidesPerView: 2, spaceBetween: 30 }, // For tablets
            1024: { slidesPerView: 3, spaceBetween: 40 }, // For desktops
          }}
          className="mySwiper"
        >
          {certificates.map((certificate) => (
            <SwiperSlide key={certificate.id}>
              <div className="flex flex-col items-center">
                <img
                  src={certificate.image}
                  className="w-full max-w-sm mb-4 rounded-lg shadow-lg "
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default Certificate;
