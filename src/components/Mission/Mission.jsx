import React from "react";
import { motion } from "framer-motion";

function Mission() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.8 } },
  };

  const imageVariants = {
    hidden: { scale: 0.8 },
    visible: { scale: 1, transition: { duration: 0.8 } },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="flex justify-around flex-col lg:flex-row"
    >
      <div style={{ flex: 1 }}>
        <motion.div
          variants={imageVariants}
          initial="hidden"
          animate="visible"
          className="p-1 m-1 lg:m-3 lg:p-3"
        >
          <motion.div
            className="rounded-lg shadow-lg overflow-hidden"
            whileHover={{ scale: 1.05 }}
          >
            <img
              src="https://i.ytimg.com/vi/84ITUmPZz1A/maxresdefault.jpg"
              alt="Photo"
              className="w-full"
            />
          </motion.div>
        </motion.div>
      </div>
      <motion.div
        variants={textVariants}
        initial="hidden"
        animate="visible"
        style={{ flex: 1, marginLeft: "1rem" }}
      >
        <div>
          <h1 className="text-3xl font-bold mt-6 ">Our Mission</h1>
          <motion.p
            className="text-xl mt-6 mr-6 lg:text-2xl font-medium"
            variants={textVariants}
          >
            Ek Bharat Shreshtha Bharat programme aims to enhance interaction &
            promote mutual understanding between people of different states/UTs
            through the concept of state/UT pairing. The states carry out
            activities to promote a sustained and structured cultural connect in
            the areas of language learning, culture, traditions & music, tourism
            & cuisine, sports and sharing of best practices, etc.
          </motion.p>
          <br />

          <motion.p
            className="text-xl"
            variants={textVariants}
          >
            To know more about Ek Bharat Shreshtha Bharat{" "}
            <a
              className="text-blue-500"
              href="https://ekbharat.gov.in/Home/Index"
              target="_blank"
            >
              click here
            </a>
          </motion.p>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default Mission;
