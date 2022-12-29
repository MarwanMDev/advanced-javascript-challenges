import React from 'react';
import { useParams } from 'react-router-dom';
import { FEATURED_PRODUCTS } from '../../../constants/api';
import MinMaxSum from '../../../pages/minMaxSum';
import PlusMinus from '../../../pages/plusMinus';

const ExampleSection = () => {
  const { id } = useParams();
  const example = FEATURED_PRODUCTS.find(
    (example) => example.id === id
  );
  return (
    <>
      {example.id === '1' && <PlusMinus example={example} />}
      {example.id === '2' && <MinMaxSum example={example} />}
    </>
  );
};

export default ExampleSection;
