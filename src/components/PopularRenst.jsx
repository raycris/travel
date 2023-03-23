import React from "react";

import Chicago from "../assets/images/chicago.jpg";
import Miami from "../assets/images/miami.jpg";
import Bali from "../assets/images/bali.jpg";
import LA from "../assets/images/LA.jpg";

import FAQ from "./FAQ";

const PopularRenst = ({ id }) => {
  return (
    <section >
      <div className="px-6 h-full lg:px-14" id={id}>
        <p className="text-3xl font-semibold text-primary pb-6">
          Trending Stays
        </p>
        <div className="w-full h-full flex flex-col items-center justify-center lg:flex-col">
          <div className="w-full h-96 bg-chicago bg-cover rounded-2xl mb-8 lg:flex-none lg:bg-center">
            <picture>
              <img
                className=" w-full h-96 bg-chicago bg-cover rounded-2xl mb-8 lg:flex-none lg:bg-center "
                src={Chicago}
                alt="Chicago"
              />
            </picture>
            <p className="CardTitle lg:text-black">Chicago</p>
            <p className="text-md pl-8 text-white mr-24 lg:text-black">
              2 rooms, 1 bathroom, 1 kitchen
            </p>
          </div>
          <div className="lg:flex lg:w-full lg:h-1/3 lg:flex-none">
            <div className="w-full h-96 bg-LA bg-cover rounded-2xl mb-8 lg:w-3/5 lg:h-auto">
              <picture>
                <img
                  className="w-full h-96 bg-LA bg-cover rounded-2xl mb-8 lg:w-auto lg:h-auto"
                  src={LA}
                  alt="Los Angeles"
                />
              </picture>
              <p className="CardTitle">Los Angeles</p>
              <p className="text-md pl-8 text-white mr-24">
                2 rooms, 1 bathroom, 1 kitchen
              </p>
            </div>
            <div className="lg:flex lg:flex-col lg:w-full lg:pl-8 ">
              <div className="w-full h-96 bg-miami bg-cover rounded-2xl mb-8 ">
                <picture>
                  <img
                    className="w-full h-96 bg-miami bg-cover rounded-2xl mb-8 "
                    src={Miami}
                    alt="Miami"
                  />
                </picture>
                <p className="CardTitle">Miami</p>
                <p className="text-md pl-8 text-white mr-24">
                  2 rooms, 1 bathroom, 1 kitchen
                </p>
              </div>
              <div className="w-full h-96 bg-bali bg-cover rounded-2xl mb-8 ">
                <picture>
                  <img
                    className="w-full h-96 bg-bali bg-cover rounded-2xl mb-8 "
                    src={Bali}
                    alt="Bali"
                  />
                </picture>
                <p className="CardTitle">Bali</p>
                <p className="text-md pl-8 text-white mr-24 ">
                  2 rooms, 1 bathroom, 1 kitchen
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PopularRenst;
