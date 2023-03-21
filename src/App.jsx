import { useState } from "react";

import Home from "./components/Home";
import Recommended from "./components/Recommended";
import PopularRents from "./components/PopularRenst";
// import Footer from "./components/Footer";

function App() {
  return (
    <div className="font-Montserrat">
      <nav></nav>
      <div id="tab_bar"></div>
      <section className="w-full h-screen">
        <Home id="home" />
        <Recommended id="recommended" />
        <PopularRents id="pupular_rents" />
      </section>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
