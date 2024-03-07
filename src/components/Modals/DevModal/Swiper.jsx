import { Autoplay, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import DevItem from './DevItem';

const SwiperElement = ({ developers }) => {
  return (
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 2000,
        disableOnInteraction: false,
      }}
      loop={true}
      pagination={true}
      modules={[Autoplay, Pagination]}
      className="mySwiper"
    >
      {developers.map((developer, index) => {
        return (
          <SwiperSlide key={index}>
            <DevItem developer={developer} />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default SwiperElement;
