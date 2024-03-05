import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import DevItem from './DevItem';
import developers from './developers_info.json';

const DevSwiper = () => {
  return (
    <Swiper
      spaceBetween={10}
      slidesPerView={3}
      onSlideChange={() => console.log('slide change')}
      onSwiper={swiper => console.log(swiper)}
    >
      {developers.developers.map(developer => (
        <SwiperSlide key={developer.id}>
          <DevItem developer={developer} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default DevSwiper;

// import DevItem from './DevItem';
// import { DevUl } from './DevList.styled';

// const DevList = ({ developers }) => {
//   console.log(developers);
//   return (
//     <DevUl>
//       {developers.map(developer => (
//         <li key={developer.id}>
//           <DevItem developer={developer} />
//         </li>
//       ))}
//     </DevUl>
//   );
// };

// export default DevList;
