import { Star } from '@mui/icons-material';
import { Link } from 'react-router-dom';

const ProductCardSlide = ({ id, title, rating, img }) => {
  return (
    <div className="flex flex-col">
      <div className="relative w-full h-64">
        <img src={img} alt="img" className="h-full w-full" />
      </div>
      <div className="flex flex-row justify-between items-center">
        <h2 className="text-xl font-bold">{title}</h2>
        {/* <p className="font-semibold text-3xl">$ {price}</p> */}
      </div>
      <div className="flex flex-row gap-x-[1px]">
        <p>Difficulty:</p>
        {Array(rating)
          .fill()
          .map((key, i) => (
            <Star key={i} className="text-orange-400" />
          ))}
      </div>
      <Link
        to={`example/${id}`}
        className="cursor-pointer w-full py-2 text-center font-bold text-xl mt-2 bg-white text-black"
      >
        View Example
      </Link>
    </div>
  );
};

export default ProductCardSlide;
