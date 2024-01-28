import React from 'react';
import { motion } from 'framer-motion';

// Import each image individually
import media1 from '../../assets/media/media1.jpg';
import media2 from '../../assets/media/media2.jpg';
import media3 from '../../assets/media/media3.jpg';
import media4 from '../../assets/media/media4.jpg';
import media5 from '../../assets/media/media5.jpg';
import media6 from '../../assets/media/media6.jpg';

function MediaSection() {
  const images = [media1, media2, media3, media4, media5, media6];

  const imageContainerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const sectionBorderVariants = {
    hidden: { borderColor: 'transparent' },
    visible: { borderColor: 'black', transition: { duration: 0.5 } },
  };

  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.8, delay: 0.2 } },
  };

  const summarizedTextVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.4 } },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={sectionBorderVariants}
      className="border rounded-md p-5 border-black"
    >
      <motion.h2
        variants={sectionVariants}
        className="text-3xl font-bold mb-4 text-center"
      >
        Republic Day Parade Experience
      </motion.h2>
      <motion.div
        variants={sectionVariants}
        className="grid grid-cols-2 md:grid-cols-3 gap-4"
      >
        {images.map((image, index) => (
          <motion.img
            key={index + 1}
            src={image}
            alt={`Media ${index + 1}`}
            variants={imageContainerVariants}
            className="w-full h-50 object-cover rounded-md mb-2"
          />
        ))}
      </motion.div>
      <motion.div
        variants={sectionVariants}
        className="text-gray-800 mt-6"
      >
        <motion.p className="text-2xl leading-7" variants={summarizedTextVariants}>
          The EBSB EDC team had an incredible experience attending the Republic Day Parade on 26th January. Amidst the awe-inspiring atmosphere of Rajpath, our team witnessed the impressive march-past, vibrant cultural performances, and flypasts, fostering a deep sense of patriotism and national pride. This unique experience has inspired our commitment to contributing to the nation's development and fostering entrepreneurial spirit.
        </motion.p>
      </motion.div>
    </motion.div>
  );
}

export default MediaSection;
