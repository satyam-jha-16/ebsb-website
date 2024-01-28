import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Home() {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [
    "https://dsel.education.gov.in/sites/default/files/ebsb.jpeg",
    "https://static.mygov.in/static/s3fs-public/mygov_157916930655063671.jpg",
    "https://www.ontimenews.in/wp-content/uploads/2022/06/Ek-Bharat-Shreshtha-Bharat-Essay-in-Hindi.jpg",
    "https://www.india.gov.in/sites/upload_files/npi/files/spotlights/ebsb.jpg",
    "https://pbs.twimg.com/profile_banners/1689307260126973952/1691752983/1500x500",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  const isMobile = window.innerWidth < 768;

  return (
    <div className="mx-auto w-full max-w-7xl">
      <div className="mx-auto w-full max-w-7xl">
        {!isMobile && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="h-96 mx-auto flex items-center justify-center overflow-hidden max-w-full rounded-lg"
          >
            <img
              src={images[currentImage]}
              className="h-96 object-cover"
              alt=""
            />
          </motion.div>
        )}
      </div>

      <div className="flex lg:flex-row-reverse justify-around my-14 mx-3 flex-col-reverse">
        <div className=" ml-4">
          <h2 className="text-3xl font-bold lg:text-5xl">
            Ek Bharat Shreshtha Bharat <br /> GGSIPU EDC
          </h2>
          <p className="text-xl mt-3 lg:text-2xl">
            EK BHARAT SHRESTHA BHARAT is a club launched by the Government of
            India to increase unity between people of different India states or
            UT. This is the GGSIPU-EDC branch (of Ek Bharat Shreshtha Bharat),
            here we organize different cultural activities to meet the
            objectives of this club which can strengthen the cultural unity
            among diverse parts of India and spread multicultural knowledge
            among people living in various states and union territories.
          </p>
        </div>

        <div className="shadow-xl">
          <img
            className="w-max h-max rounded-xl"
            src="https://ek-bharat-shreshtha-bharat.narendramodi.in/files/mobile/1.jpg?190122144333"
            alt="image1"
          />
        </div>
      </div>
    </div>
  );
}
