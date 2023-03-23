import React from "react";

import SanFran from "../assets/images/sanFrancisco.jpg";

const Home = ({ id }) => {
  return (
    <div id={id}>
      <div className="w-full h-3/4">
        <div className="w-full h-full flex flex-col absolute space-y-80 py-4 items-center lg:space-y-0 lg:items-start lg:pt-20 lg:justify-start">
          <input
            className="outline-none p-3 rounded-xl shadow-sm transition duration-300 focus-within:shadow-sm focus:ring-2 focus:w-11/12 lg:hidden"
            type="search"
            placeholder="San Francisco"
          />
          <div className="hidden lg:h-auto lg:w-2/5 lg:flex lg:pb-6">
            <p className="text-4xl ml-16 font-bold text-black">Find More Locations like this</p>
          </div>
          <button className="text-xl text-primary font-semibold p-4 w-44 rounded-md bg-white transition-all duration-500 ease-in-out hover:bg-primary hover:text-white transform hover:-translate-y-1 hover:scale-110 lg:ml-16">
            Explore more
          </button>
        </div>
        <div className="w-full h-full lg:h-96 lg:bg-sanFranciscoDesktop lg:bg-cover lg:bg-center">
          <img className="lg:hidden" src={SanFran} alt="San Francisco" />
        </div>
      </div>
    </div>
  );
};

export default Home;
