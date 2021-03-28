import React from 'react';
import Hero from '../../Hero';
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour } from './Data';
import Pricing from '../../Pricing';

function Services() {
  return (
    <>
      <Pricing />
      <Hero {...homeObjOne} />
      <Hero {...homeObjThree} />
    </>
  );
}

export default Services;
