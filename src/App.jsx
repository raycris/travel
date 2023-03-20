import { useState } from "react";

import Home from "./components/Home";
import Recommended from "./components/Recommended";
import PopularRents from "./components/PopularRents";
import Footer from "./components/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <nav></nav>
      <div id="tab_bar"></div>
      <section>
        <Home id="home" />
        <Recommended id="recommended" />
        <PopularRents id="pupular_rents" />
      </section>
      <Footer />
      {/* <h1 className="font-Montserrat text-xl">Hello world!</h1>
      <div className="w-8 h-8 bg-purple">padre tiempo</div> */}
    </div>
  );
}

export default App;
