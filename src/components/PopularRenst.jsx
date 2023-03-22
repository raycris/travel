import React from "react";

import Chicago from "../assets/images/chicago.jpg";

import FAQ from "./FAQ";

const PopularRenst = ({ id }) => {
  return (
    <>
      <div className="px-2 h-auto w-full" id={id}>
        <p className="text-3xl text-primary font-semibold pb-6 mt-6">
          Trending Stays
        </p>
        <div className="w-full h-auto flex flex-col space-y-6 items-center justify-center">
          <div className="w-full h-96 bg-primary  bg-cover rounded-lg">
            <picture>
              <img className=" rounded-t" src={Chicago} alt="Chicago" />
            </picture>
            <p className="CardTitle ">Chicago</p>
            <p className="text-sm pl-8 text-black mr-24">
              2 rooms, 1 bathroom, 1 kitchen
            </p>
          </div>
          <div className="w-full h-96 bg-primary  bg-cover rounded-lg">
            <picture>
              <img className="rounded-t" src={Chicago} alt="Chicago" />
            </picture>
            <p className="CardTitle">Chicago</p>
            <p className="text-sm pl-8 text-black mr-24">
              2 rooms, 1 bathroom, 1 kitchen
            </p>
          </div>
        </div>
      </div>
      <FAQ id="faqs" />
    </>
  );
};

export default PopularRenst;
