import React from 'react';
import { useParams } from 'react-router-dom';
import { FEATURED_PRODUCTS } from '../../../constants/api';

const ExampleSection = () => {
  const { id } = useParams();

  const example = FEATURED_PRODUCTS.find(
    (example) => example.id === id
  );

  const handleOnClick = (e) => {
    e.preventDefault();
    example.excute(1, 2);
  };

  return (
    <div className="flex flex-row justify-between px-10 lg:px-20 my-10 h-96">
      <div className="flex flex-col gap-y-5 justify-center items-center w-2/4">
        <h2 className="text-3xl">{example?.title}</h2>
        <p className="text-justify">{example?.description}</p>
      </div>
      <div className="flex flex-col gap-y-5 justify-center items-center w-2/4">
        <button
          className="bg-purple-500 py-3 px-8 text-lg font-bold rounded-sm hover:bg-purple-900"
          onClick={handleOnClick}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default ExampleSection;
