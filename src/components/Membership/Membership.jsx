import React from "react";

export default function Membership() {
  return (
    <div className="flex items-center flex-col-reverse lg:flex-row">
      <div style={{ flex: 1 }}>
        <div style={{ padding: "1rem", margin: "1rem", maxWidth: "500px" }}>
          <div className="rounded-lg shadow-lg overflow-hidden">
            <div className="bg-gray-200 p-4 rounded-lg shadow-lg">
              <div className="text-3xl font-bold p-5">Contact Us</div>
              <h1 className="text-xl mb-3 pl-3">
                For any queries and suggestions
              </h1>
              <div className="flex items-center mt-2 p-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-7 h-7"
                  viewBox="0 0 512 512"
                >
                  <path d="M64 112c-8.8 0-16 7.2-16 16v22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1V128c0-8.8-7.2-16-16-16H64zM48 212.2V384c0 8.8 7.2 16 16 16H448c8.8 0 16-7.2 16-16V212.2L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64H448c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128z" />
                </svg>
                <h1 className="text-xl pl-1">ebsb.edc@gmail.com</h1>
              </div>
              <div className="flex items-center mt-2 p-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-7 h-7"
                  viewBox="0 0 512 512"
                >
                  <path d="M64 112c-8.8 0-16 7.2-16 16v22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1V128c0-8.8-7.2-16-16-16H64zM48 212.2V384c0 8.8 7.2 16 16 16H448c8.8 0 16-7.2 16-16V212.2L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64H448c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128z" />
                </svg>
                <h1 className="text-xl pl-1">aaditya.ps07@gmail.com</h1>
              </div>
              <div className="flex items-center mt-2 p-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-7 h-7"
                  viewBox="0 0 512 512"
                >
                  <path d="M64 112c-8.8 0-16 7.2-16 16v22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1V128c0-8.8-7.2-16-16-16H64zM48 212.2V384c0 8.8 7.2 16 16 16H448c8.8 0 16-7.2 16-16V212.2L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64H448c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128z" />
                </svg>
                <h1 className="text-xl pl-1">khantauseefahmad18@gmail.com</h1>
              </div>
              <div className="flex items-center mt-2 p-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-7 h-7"
                  viewBox="0 0 512 512"
                >
                  <path d="M64 112c-8.8 0-16 7.2-16 16v22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1V128c0-8.8-7.2-16-16-16H64zM48 212.2V384c0 8.8 7.2 16 16 16H448c8.8 0 16-7.2 16-16V212.2L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64H448c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128z" />
                </svg>
                <h1 className="text-xl pl-1">satyamkjha2005@gmail.com</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div style={{ flex: 1, marginLeft: "1rem" }}>
        <div className="mb-10">
          <h1 className="text-3xl font-bold mt-6 ">
            Feeling Inspired to join us
          </h1>
          <p className="text-2xl font-medium mt-6 mr-6">
            Join the EBSB movement! Unleash your passion for Indian culture,
            ignite your creativity, and be part of something BIG. Exciting
            events await—your journey with Ek Bharat Shrestha Bharat starts
            here! 🌟
          </p>
          <br />

          <p className="text-2xl">
            To know more{" "}
            <a
              className="text-blue-500 mb-10"
              href="https://docs.google.com/forms/d/e/1FAIpQLSdOkSoE6YiEOnOHwCby6ejXVIMp1WbUS5ztNJ9EF7O8Kd5jkA/viewform?usp=sf_link"
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
