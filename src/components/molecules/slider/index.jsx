import React from 'react';
import { Swiper } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';
import 'swiper/swiper.min.css';
import 'swiper/swiper-bundle.css';
import 'swiper/css';
import { NavigationButton } from '../../atoms';
import { useWindowSize } from '../../../hooks/useWindowSize';

const Slider = ({ children, title, className, ...rest }) => {
  const [swiperSlide, setSwiperSlide] = React.useState(null);
  const { isMobile } = useWindowSize();

  const onNext = () => {
    swiperSlide.slideNext();
  };
  const onPrev = () => {
    swiperSlide.slidePrev();
  };

  return (
    <div className={`w-full relative ${className}`}>
      {title && (
        <div className="text-2xl my-16 font-bold">{title}</div>
      )}
      <Swiper
        {...rest}
        onSwiper={(e) => setSwiperSlide(e)}
        modules={[Navigation, Pagination]}
        className="group"
      >
        {!isMobile && (
          <NavigationButton type="prev" onClick={onPrev} />
        )}
        {children}
        {!isMobile && (
          <NavigationButton type="next" onClick={onNext} />
        )}
      </Swiper>
    </div>
  );
};

export default Slider;
