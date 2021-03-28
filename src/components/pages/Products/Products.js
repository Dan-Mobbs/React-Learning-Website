import React from 'react';
import Hero from '../../Hero';
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour } from './Data';
import Pricing from '../../Pricing';

function Products() {
  return (
    <>
      <Hero {...homeObjOne} />
      <Hero {...homeObjTwo} />
    </>
  );
}

export default Products;
