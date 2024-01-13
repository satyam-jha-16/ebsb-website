import React from "react";

const Card = ({ imagelink, text, size, outt, act }) => {
  return (
    // <div className='border shadow-lg p-5' >
    <div className="rounded-lg shadow-2xl p-5 m-10 flex flex-col items-center justify-center">
      <img
        src={imagelink}
        alt="card image"
        className={`rounded-t-lg shadow-lg ${size}`}
      />
      <p className="mt-5">{text}</p>
      <a href={`${outt}`} target="_blank">
        {act}
      </a>
    </div>
    // </div>
  );
};

export default Card;
