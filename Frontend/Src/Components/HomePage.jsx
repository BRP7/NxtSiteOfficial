import React from "react";

const HomePage = () => {
  return (
    <div className="w-full flex flex-col items-center">
      {/* First Section */}
      <div className="h-[70vh] w-full max-w-5xl py-6 px-4 bg-[#2F2C2C] rounded-bl-lg rounded-br-lg shadow-lg relative">
        {/* Text Section - Absolutely Positioned */}
        <div className="absolute top-10 left-10">
          <div className="text-start mt-[44vh] ml-20">
            <p className="text-lg text-gray-400">
              The Dream you imagine seems impossible
              <br />
              Is something we make possible
            </p>
            <h1 className="text-8xl text-[#BCBCBC] font-thin">
              Kick Start Your <br />
              <span style={{ lineHeight: "1.5" }} className="mt-[6vh] block">Online <br /> Presence</span>
              </h1>
          </div>
        </div>
      </div>

      {/* Secondary Section */}
      <div className="w-full max-w-5xl bg-[#2F2C2C] py-8 px-6 rounded-lg shadow-lg mt-[15vh] text-center">
        <div className="flex justify-start space-x-6 mt-6">
          <button className="bg-black mt-[50vh] ml-20 text-white py-2 px-6 rounded-full hover:text-white hover:outline hover:outline-white">
            Book Call
          </button>
          <button className="text-gray-300 mt-[50vh] ml-20 border border-gray-500 py-2 px-6 rounded-full hover:bg-[#2F2C2C] hover:text-white hover:outline hover:outline-white">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
