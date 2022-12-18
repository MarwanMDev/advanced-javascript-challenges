import { Star } from '@mui/icons-material';

const ProductCardSlide = ({ title, rating, img }) => {
  return (
    <div className="flex flex-col">
      <div className="relative w-full h-96">
        <img src={img} alt="img" className="h-full w-full" />
      </div>
      <div className="flex flex-row justify-between items-center">
        <h2 className="text-2xl font-bold">{title}</h2>
        {/* <p className="font-semibold text-3xl">$ {price}</p> */}
      </div>
      <div className="flex flex-row gap-x-[1px]">
        {Array(rating)
          .fill(0)
          .map((key) => (
            <Star key={key} className="text-orange-400" />
          ))}
      </div>
      <button className="cursor-pointer w-full py-2 font-bold text-xl mt-2 bg-white text-black">
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCardSlide;
