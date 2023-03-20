import React from "react";

import Norway from "../assets/images/norway.jpg";

const Recommended = ({ id }) => {
  return (
    <div className="p-20" id={id}>
      <div className="w-48 h-64  shadow-md rounded-lg">
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
    </div>
  );
};

export default Recommended;
