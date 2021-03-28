import React from 'react';
import Hero from '../../Hero';
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour} from './Data';
import Pricing from '../../Pricing';

function Home() {
    return (
        <>
          <Hero {...homeObjOne} /> 
          <Hero {...homeObjThree} />
          <Hero {...homeObjTwo} />
          <Pricing />
          <Hero {...homeObjFour} /> 
        </>
    )
}

export default Home
