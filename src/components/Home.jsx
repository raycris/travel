import React from "react";

import SanFran from "../assets/images/sanFrancisco.jpg";

const Home = ({ id }) => {
  return (
    <div id={id}>
      <div className="w-full h-3/4">
        <div className="w-full h-full flex flex-col absolute space-y-80 py-4 items-center ">
          <input
            className="outline-none p-3 rounded-xl shadow-sm transition duration-300 focus-within:shadow-sm focus:ring-2 focus:w-11/12"
            type="search"
            placeholder="San Francisco"
          />
          <button className="text-xl text-primary font-semibold p-4 w-44 rounded-md bg-white transition-all duration-500 ease-in-out hover:bg-primary hover:text-white transform hover:-translate-y-1 hover:scale-110">
            Explore more
          </button>
        </div>
        <div className="w-full h-full">
          <img src={SanFran} alt="San Francisco" />
        </div>
      </div>
    </div>
  );
};

export default Home;
