// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
// import styles from './Nature.module.scss';
// import { EffectCoverflow, Pagination } from 'swiper/modules';

// const Nature = () => {
//   return (
//     <div className={styles['slider-container']}>
//       <Swiper
//         spaceBetween={50}
//         loop={true}
//         // effect="coverflow"
//         grabCursor={true}
//         centeredSlides={true}
//         slidesPerView="auto"
//         coverflowEffect={{
//           rotate: 50,
//           stretch: 0,
//           depth: 100,
//           modifier: 1,
//           slideShadows: true,
//         }}
//         pagination={{ clickable: true }}
//         modules={[EffectCoverflow, Pagination]}
//         className={styles['mySwiper']}
//       >
//         <SwiperSlide style={{ width: '200px', height: '200px' }}>
//           <img
//             src="http://marveltheme.com/tf/html/appai/appai/img/app-screenshots/10.jpg"
//             alt=""
//             style={{ width: '200px', height: '200px' }}
//           />
//         </SwiperSlide>
//         <SwiperSlide style={{ width: '200px', height: '200px' }}>
//           <img
//             src="http://marveltheme.com/tf/html/appai/appai/img/app-screenshots/10.jpg"
//             alt=""
//             style={{ width: '200px', height: '200px' }}
//           />
//         </SwiperSlide>
//         <SwiperSlide style={{ width: '200px', height: '200px' }}>
//           <img
//             src="http://marveltheme.com/tf/html/appai/appai/img/app-screenshots/10.jpg"
//             alt=""
//             style={{ width: '200px', height: '200px' }}
//           />
//         </SwiperSlide>
//         <SwiperSlide style={{ width: '200px', height: '200px' }}>
//           <img
//             src="http://marveltheme.com/tf/html/appai/appai/img/app-screenshots/10.jpg"
//             alt=""
//             style={{ width: '200px', height: '200px' }}
//           />
//         </SwiperSlide>
//         <SwiperSlide style={{ width: '200px', height: '200px' }}>
//           <img
//             src="http://marveltheme.com/tf/html/appai/appai/img/app-screenshots/10.jpg"
//             alt=""
//             style={{ width: '200px', height: '200px' }}
//           />
//         </SwiperSlide>
//       </Swiper>
//     </div>
//   );
// };

// export default Nature;

// import React from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/scss';
// import 'swiper/css/effect-coverflow';
// import 'swiper/css/pagination';
// // import { EffectCoverflow, Pagination } from 'swiper';
// import { EffectCoverflow, Pagination } from 'swiper';

// const Slider = () => {
//   const images = [
//     'path-to-image1.jpg',
//     'path-to-image2.jpg',
//     'path-to-image3.jpg',
//     'path-to-image4.jpg',
//   ];

//   return (
//     <div style={{ width: '80%', margin: 'auto' }}>
//       <Swiper
//         effect="coverflow"
//         grabCursor={true}
//         centeredSlides={true}
//         slidesPerView={'auto'}
//         coverflowEffect={{
//           rotate: 50,
//           stretch: 0,
//           depth: 100,
//           modifier: 1,
//           slideShadows: true,
//         }}
//         pagination={{ clickable: true }}
//         modules={[EffectCoverflow, Pagination]}
//       >
//         {images.map((image, index) => (
//           <SwiperSlide key={index}>
//             <img
//               src={image}
//               alt={`Slide ${index + 1}`}
//               style={{ width: '100%' }}
//             />
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </div>
//   );
// };

// export default Slider;

import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { EffectCoverflow, Pagination } from 'swiper/modules';
import styles from './Nature.module.scss';
import nature1 from '../../imgs/nature/nature1.jpg';
import nature2 from '../../imgs/nature/nature2.jpg';
import nature3 from '../../imgs/nature/nature3.jpg';
import nature4 from '../../imgs/nature/nature4.jpg';
import nature5 from '../../imgs/nature/nature5.jpg';

const Nature = () => {
  const screenWidth = window.screen.width;
  return (
    screenWidth > 1170 && (
      <section className={styles.nature}>
        <div className={'container'}>
          <Swiper
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={'auto'}
            coverflowEffect={{
              rotate: 0,
              stretch: 100,
              depth: 200,
              modifier: 1,
              slideShadows: false,
            }}
            pagination={true}
            modules={[EffectCoverflow]}
            initialSlide={2}
            className="mySwiper"
          >
            <SwiperSlide className={styles['swiper-slide']}>
              <img src={nature1} alt="nature" />
            </SwiperSlide>
            <SwiperSlide className={styles['swiper-slide']}>
              <img src={nature2} alt="nature" />
            </SwiperSlide>
            <SwiperSlide className={styles['swiper-slide']}>
              <img src={nature3} alt="nature" />
            </SwiperSlide>
            <SwiperSlide className={styles['swiper-slide']}>
              <img src={nature4} alt="nature" />
            </SwiperSlide>
            <SwiperSlide className={styles['swiper-slide']}>
              <img src={nature5} alt="nature" />
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
    )
  );
};

export default Nature;
