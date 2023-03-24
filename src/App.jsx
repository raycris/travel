import { useState } from "react";

import Home from "./components/Home";
import Recommended from "./components/Recommended";
import PopularRents from "./components/PopularRenst";
import Footer from "./components/Footer";
import TabBar from "./components/TabBar";
import FAQ from "./components/FAQ";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="font-Montserrat" >
      <NavBar />

      <section className="w-full h-screen">
        <Home id="home" />
        <Recommended id="recommended" />
        <PopularRents id="popular_rents" />
        <FAQ id="faq"/>
        <Footer id="footer"/>
        <TabBar
          id="tab_bar"
          homeId="home"
          popularRentsId="popular_rents"
          recommendedId="recommended"
        />
      </section>
    </div>
  );
}

export default App;
