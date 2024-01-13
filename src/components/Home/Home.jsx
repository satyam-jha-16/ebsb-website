import React from "react";

import { useState, useEffect } from "react";
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
          <div className="h-96 mx-auto flex items-center justify-center overflow-hidden max-w-full rounded-lg">
            <img
              src={images[currentImage]}
              className="h-96 object-cover"
              alt=""
            />
          </div>
        )}
      </div>
      <aside className="relative overflow-hidden text-black rounded-lg sm:mx-16 mx-2 sm:py-16">
        <div className="relative z-10 max-w-screen-xl px-4  pb-20 pt-10 sm:py-24 mx-auto sm:px-6 lg:px-8">
          <div className="max-w-xl sm:mt-1 mt-80 space-y-8 text-center sm:text-right sm:ml-auto">
            <h2>Ek Bharat Shreshtha Bharat</h2>
          </div>
        </div>

        <div className="absolute inset-0 w-full sm:my-20 sm:pt-1 pt-12 h-full ">
          <img
            className="w-96 h-max"
            src="https://ek-bharat-shreshtha-bharat.narendramodi.in/files/mobile/1.jpg?190122144333"
            alt="image1"
          />
        </div>
      </aside>
    </div>
  );
}
