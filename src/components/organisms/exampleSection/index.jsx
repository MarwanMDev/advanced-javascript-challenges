import React from 'react';
import { useParams } from 'react-router-dom';
import { FEATURED_PRODUCTS } from '../../../constants/api';
import PlusMinus from '../../../pages/plusMinus';

const ExampleSection = () => {
  const { id } = useParams();
  const example = FEATURED_PRODUCTS.find(
    (example) => example.id === id
  );
  console.log(example.id);

  return <>{example.id === '1' && <PlusMinus example={example} />}</>;
};

export default ExampleSection;
