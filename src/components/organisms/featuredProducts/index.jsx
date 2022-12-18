import { SwiperSlide } from 'swiper/react';
import { FEATURED_PRODUCTS } from '../../../constants/api';
import { ProductCardSlide, Slider } from '../../molecules';

const FeaturedProducts = () => {
  return (
    <div className="my-10">
      <div className="px-20 mb-10">
        <h2 className="text-4xl font-bold">Featured Products</h2>
      </div>
      <Slider
        style={{ paddingLeft: 80, paddingRight: 80 }}
        spaceBetween={10}
        breakpoints={{
          640: {
            slidesPerView: 1.3,
          },
          1200: {
            slidesPerView: 3.4,
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
