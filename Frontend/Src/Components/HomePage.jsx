import React from "react";

const HomePage = () => {
  return (
    <div className="w-full flex justify-center items-center">
<div className="h-[70vh] w-full max-w-5xl py-6 px-4 flex justify-center items-center bg-[#2F2C2C] rounded-bl-lg rounded-br-lg shadow-lg relative">
      {/* Main Section */}
      <main className="w-full absolute mt-[80vh] max-w-5xl flex flex-col items-left justify-left">
      {/* Text Section */}
        <div className="text-start  ml-20">
          <p className="text-lg text-gray-400">
            The Dream you imagine seems impossible
            <br />
            Is something we make possible
          </p>
          <h1 className="text-8xl text-[#BCBCBC] font-thin mt-4">Kick Start Your <br/>Online Presence</h1>
        </div>

        {/* Secondary Section */}
        <div className="bg-[#2F2C2C] py-8 px-6 rounded-lg shadow-lg text-center">
          <div className="flex justify-start space-x-6 mt-6">
            <button className="bg-black  ml-20 text-white py-2 px-6 rounded-full hover:bg-gray-700">
              Book Call
            </button>
            <button className="text-gray-300  ml-20 border border-gray-500 py-2 px-6 rounded-full hover:bg-gray-700 hover:text-white">
              Learn More
            </button>
          </div>
        </div>
      </main>
    </div>
    </div>
  );
};

export default HomePage;
