import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';

const VerticalCircularBand = () => {
  const controls = useAnimation();

  const animateBand = () => {
    controls.start({
      y: [-10, 10, -10], // Define the animation sequence, making it move up and down
      transition: {
        duration: 2, // Duration of each animation cycle (in seconds)
        repeat: Infinity, // Repeat indefinitely
      },
    });
  };

  useEffect(() => {
    animateBand();
  }, []);

  return (
    <div className='background-image '>
     
    <motion.div
     style={{
        position: 'absolute', // Position it absolutely
        // zIndex: -1,
        width: '360px',
        height: '360px', // Adjust the height as needed
        backgroundColor: 'transparent', // Make it transparent
        border: '30px solid #61dafb', // Set the border as the circular band
        borderRadius: '50%',
        top: '20px',
        bottom:'115px',
        float:'right',
       right:0,
        display:'flex',
      }}
      animate={controls}
    />
    </div>
  );
};

export default VerticalCircularBand;
