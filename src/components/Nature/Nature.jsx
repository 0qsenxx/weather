import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import styles from './Nature.module.scss';
import { EffectCoverflow, Pagination } from 'swiper/modules';

const Nature = () => {
  return (
    <div className={styles['slider-container']}>
      <Swiper
        spaceBetween={50}
        loop={true}
        // effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        slidesPerView="auto"
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={{ clickable: true }}
        modules={[EffectCoverflow, Pagination]}
        className={styles['mySwiper']}
      >
        <SwiperSlide style={{ width: '200px', height: '200px' }}>
          <img
            src="http://marveltheme.com/tf/html/appai/appai/img/app-screenshots/10.jpg"
            alt=""
            style={{ width: '200px', height: '200px' }}
          />
        </SwiperSlide>
        <SwiperSlide style={{ width: '200px', height: '200px' }}>
          <img
            src="http://marveltheme.com/tf/html/appai/appai/img/app-screenshots/10.jpg"
            alt=""
            style={{ width: '200px', height: '200px' }}
          />
        </SwiperSlide>
        <SwiperSlide style={{ width: '200px', height: '200px' }}>
          <img
            src="http://marveltheme.com/tf/html/appai/appai/img/app-screenshots/10.jpg"
            alt=""
            style={{ width: '200px', height: '200px' }}
          />
        </SwiperSlide>
        <SwiperSlide style={{ width: '200px', height: '200px' }}>
          <img
            src="http://marveltheme.com/tf/html/appai/appai/img/app-screenshots/10.jpg"
            alt=""
            style={{ width: '200px', height: '200px' }}
          />
        </SwiperSlide>
        <SwiperSlide style={{ width: '200px', height: '200px' }}>
          <img
            src="http://marveltheme.com/tf/html/appai/appai/img/app-screenshots/10.jpg"
            alt=""
            style={{ width: '200px', height: '200px' }}
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Nature;
