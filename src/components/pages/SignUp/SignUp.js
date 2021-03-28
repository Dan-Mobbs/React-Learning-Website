import React from 'react';
import Hero from '../../Hero';
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour } from './Data';
import Pricing from '../../Pricing';

function SignUp() {
  return (
    <>
      <Hero {...homeObjOne} />
      <Hero {...homeObjThree} />
    </>
  );
}

export default SignUp;
