import { SwiperSlide } from 'swiper/react';
import { FEATURED_PRODUCTS } from '../../../constants/api';
import { ProductCardSlide, Slider } from '../../molecules';
import { useWindowSize } from '../../../hooks/useWindowSize';

const FeaturedProducts = () => {
  const { isMobile } = useWindowSize();

  return (
    <div className="my-10">
      <div className="px-10 lg:px-20 mb-10">
        <h2 className="text-3xl font-bold">Featured Products</h2>
      </div>
      <Slider
        style={
          isMobile
            ? { paddingLeft: 40, paddingRight: 40 }
            : { paddingLeft: 80, paddingRight: 80 }
        }
        spaceBetween={10}
        breakpoints={{
          640: {
            slidesPerView: 1.3,
          },
          1200: {
            slidesPerView: 4.4,
          },
          2000: {
            slidesPerView: 5.4,
          },
        }}
      >
        {FEATURED_PRODUCTS.map((product, key) => (
          <SwiperSlide key={key}>
            <ProductCardSlide {...product} />
          </SwiperSlide>
        ))}
      </Slider>
    </div>
  );
};

export default FeaturedProducts;
