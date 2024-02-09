import React from 'react';
import { motion, useAnimation } from 'framer-motion';

const CircularBand = () => {
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

  // Start the animation when the component mounts
  React.useEffect(() => {
    animateBand();
  }, []);

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <motion.div
        style={{
          width: '100px',
          height: '10px',
          backgroundColor: 'blue',
          borderRadius: '50px',
        }}
        animate={controls}
      ></motion.div>
    </div>
  );
};

export default CircularBand;
