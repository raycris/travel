import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1 className="font-Montserrat text-xl">Hello world!</h1>
      <div className="w-8 h-8 bg-purple">padre tiempo</div>
    </>
  );
}

export default App;
