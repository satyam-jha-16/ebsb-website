import React from "react";

function Fcard({ imagelink, name, post }) {
  return (
    <div className="rounded-lg shadow-2xl p-5 m-10 flex flex-col items-center justify-center">
      <img
        src={imagelink}
        alt="card image"
        className="rounded-full shadow-lg w-96"
      />
      <h1 className="mt-5 text-xl">{name}</h1>
      <h2 className="mt-1 text-xl">{post}</h2>
    </div>
  );
}

export default Fcard;
