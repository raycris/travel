import React from "react";

import Chicago from "../assets/images/chicago.jpg";
import Miami from "../assets/images/miami.jpg";
import Bali from "../assets/images/bali.jpg";
import LA from "../assets/images/LA.jpg";


const PopularRenst = ({ id }) => {
  return (
    <section>
      <div id={id} class="p-6 h-full w-full ">
        <p class="text-3xl text-primary font-semibold">Trending Stays</p>
        <div class="w-full h-full flex flex-col space-y-4 items-center justify-center mt-6 ">
          <div class="w-full h-96 bg-chicago bg-cover rounded-xl lg:h-[38rem] lg:text-right lg:bg-center ">
            <picture>
              <img
                className="w-full h-96 bg-chicago bg-cover rounded-xl lg:h-[38rem] lg:text-right lg:bg-center "
                src={Chicago}
                alt="Miami"
              />
            </picture>
            <p class="CardTitle">Chicago</p>
            {/* <p class="text-sm pl-8 text-black mr-24 lg:mr-8 lg:text-base">
              2 rooms, bathroom and kitchen.
            </p> */}
          </div>

          <div class="w-full h-full grid grid-cols-1 lg:grid-cols-5 lg:grid-rows-2 lg:place-items-center lg:place-content-stretch gap-4">
            <div class="w-full h-96 bg-LA bg-cover rounded-xl lg:row-span-2 lg:col-span-2 lg:h-[49rem] lg:text-right lg:bg-center ">
              <picture>
                <img
                  className="w-full h-96 bg-LA bg-cover rounded-xl lg:row-span-2 lg:col-span-2 lg:h-[49rem] lg:text-right lg:bg-center  "
                  src={LA}
                  alt="LA"
                />
              </picture>
              <p class="CardTitle">Los Angeles</p>
              {/* <p class="text-sm pl-8 text-black mr-24 lg:mr-8 lg:text-base">
                4 rooms, 3 bathrooms, kitchen and private pool.
              </p> */}
            </div>

            <div class="w-full h-96 bg-miami bg-cover rounded-xl lg:row-span-1 lg:col-span-3 lg:text-right lg:bg-center ">
              <picture>
                <img
                  className="w-full h-96 bg-miami bg-cover rounded-2xl mb-8 "
                  src={Bali}
                  alt="Bali"
                />
              </picture>
              <p class="CardTitle">Miami</p>
              {/* <p class="text-sm pl-8 text-black mr-24 lg:mr-8 lg:text-base">
                3 rooms, 2 bathrooms, kitchen and amazing sea view.
              </p> */}
            </div>

            <div class="w-full h-96 bg-bali bg-cover rounded-xl lg:row-span-1 lg:col-span-3 lg:text-right lg:bg-center ">
              <picture>
                <img
                  className="w-full h-96 bg-miami bg-cover rounded-2xl mb-8 "
                  src={Miami}
                  alt="Miami"
                />
              </picture>
              <p class="CardTitle">Bali</p>
              {/* <p class="text-sm pl-8 text-black mr-24 lg:mr-8 lg:text-base">
                2 rooms, 2 bathrooms, kitchen and private pool.
              </p> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PopularRenst;
