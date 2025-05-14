'use client';

import Lottie from 'lottie-react';
import planeAnimation from "../../public/lottie/planeAnimation.json"; // Adjust path if needed



const PlaneAnimation: React.FC = () => {
  return (
    <div className="w-full max-w-[500px] mx-auto">
      <Lottie
        animationData={planeAnimation}
        loop
        autoplay
        style={{ width: '100%', height: 'auto' }}
      />
    </div>
  );
};

export default PlaneAnimation;