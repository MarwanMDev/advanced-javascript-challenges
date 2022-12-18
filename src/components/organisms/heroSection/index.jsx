import { Slider } from '../../molecules';
import { SwiperSlide } from 'swiper/react';
import { HERO_IMAGES } from '../../../constants/api';

const HeroSection = () => {
  return (
    <Slider slidesPerView={1} className="px-10">
      {HERO_IMAGES.map((img, index) => (
        <SwiperSlide key={index}>
          <div className={`${img} bg-cover bg-center h-[80vh]`} />
        </SwiperSlide>
      ))}
    </Slider>
  );
};

export default HeroSection;
