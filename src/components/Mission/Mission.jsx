import React from "react";

function Mission() {
  return (
    <div className="flex justify-around flex-col lg:flex-row" style={{ display: "flex", justifyContent: "space-around"}}>
      <div style={{ flex: 1 }}>
        <div style={{maxWidth: "800px" }} className="p-1 m-1 lg:m-3 lg:p-3">
          <div className="rounded-lg shadow-lg overflow-hidden">
            <img
              src="https://i.ytimg.com/vi/84ITUmPZz1A/maxresdefault.jpg"
              alt="Photo"
              className="w-full"
            />
          </div>
        </div>
      </div>
      <div style={{ flex: 1, marginLeft: "1rem" }}>
        <div>
          <h1 className="text-3xl font-bold mt-6 ">Our Mission</h1>
          <p className="text-xl mt-6 mr-6 lg:text-2xl font-medium">
            Ek Bharat Shreshtha Bharat programme aims to enhance interaction &
            promote mutual understanding between people of different states/UTs
            through the concept of state/UT pairing. The states carry out
            activities to promote a sustained and structured cultural connect in
            the areas of language learning, culture, traditions & music, tourism
            & cuisine, sports and sharing of best practices, etc.
          </p>
          <br />

          <p className="text-xl">
            To know more about Ek Bharat Shreshtha Bharat{" "}
            <a
              className="text-blue-500"
              href="https://ekbharat.gov.in/Home/Index"
              target="_blank"
            >
              click here
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Mission;
