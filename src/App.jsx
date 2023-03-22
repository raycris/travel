import { useState } from "react";

import Home from "./components/Home";
import Recommended from "./components/Recommended";
import PopularRents from "./components/PopularRenst";
import Footer from "./components/Footer";
import TabBar from "./components/TabBar";
import FAQ from "./components/FAQ";


function App() {
  return (
    <div className="font-Montserrat">
      <nav></nav>

      <section className="w-full h-screen">
        <Home id="home" />
        <Recommended id="recommended" />
        <PopularRents id="pupular_rents" />
        <FAQ/>
        <Footer />
        <TabBar
          id="tab_bar"
          homeId="home"
          popularRentsId="pupular_rents"
          recommendedId="recommended"
        />
      </section>
    </div>
  );
}

export default App;
