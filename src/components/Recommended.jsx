import React from "react";

import Norway from "../assets/images/norway.jpg";
import NewYork from "../assets/images/new_york.jpg";

const Recommended = ({ id }) => {
  return (
    <div className="p-6" id={id}>
      <p className="text-3xl font-semibold text-primary">Recommended</p>
      <div className="w-auto h-72 items-center mt-6 overflow-x-auto overscroll-x-contain flex space-x-4">
        <div className="Card">
          <div className="w-full h-auto rounded-t-lg new_york bg-cover">
            <picture>
              <img src={Norway} alt="Norway" className="rounded-t-lg" />
            </picture>
          </div>
          <div className="w-full h-3/5 bg-secondary rounded-b-lg">
            <p className="text-white font-bold text-xl px-4 py-2">Norway</p>
            <p className="text-white text-md px-4">Beautiful landscapes</p>
          </div>
        </div>
        <div className="Card">
          <div className="w-full h-auto rounded-t-lg new_york bg-cover">
            <picture>
              <img src={NewYork} alt="Norway" className="rounded-t-lg" />
            </picture>
          </div>
          <div className="w-full h-3/5 bg-white rounded-b-lg">
            <p className="text-tertiary font-bold text-xl px-4 py-2">Norway</p>
            <p className="text-tertiary text-md px-4">Beautiful landscapes</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recommended;
