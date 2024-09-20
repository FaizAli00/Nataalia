import React, { useState } from 'react'

import myimage from "../../Assets/images/online.jpg";
import Category from "../Categories/Categories";
const Hero = () => {
  const [firstTextDone, setFirstTextDone] = useState(false);

  const TypewriterEffect = ({ text, className, onComplete }) => {
    // ... (rest of the TypewriterEffect component remains unchanged)
  };
  
  return (
    <>
      <div className="flex justify-center items-center relative">
      <img
        src={myimage}
        alt="House of Nataalia" // Add alternative text for accessibility
        className="shadow-lg h-[600px] w-full"
      />
      <div className="absolute top-1/2 left-1/2 bottom-2/3 transform -translate-x-1/2 -translate-y-1/2 text-white">
        <TypewriterEffect
          text="House of Nataalia"
          onComplete={() => setFirstTextDone(true)}
        />
        {firstTextDone && (
          <TypewriterEffect
            text="Coming Soon"
            className="mt-4 flex justify-center"
          />
        )}
      </div>
      <button className="absolute bottom-10 left-1/2 transform -translate-x-1/2 bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded">
        Shop Now
      </button>
    </div>
    <Category />
    
    </>
  )
}

export default Hero
