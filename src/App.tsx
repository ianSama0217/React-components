import "../public/scss/index.scss";

import { useState } from "react";
import Switch from "./components/switch/Switch";

function App() {
  const [isDisplay, setIsDisplay] = useState(false);
  const handleChange = () => {
    setIsDisplay(!isDisplay);
    console.log("isDisplay = " + isDisplay);
  };

  return (
    <>
      <h1>App Home</h1>
      <Switch isChecked={isDisplay} handleChange={handleChange} />
      <Switch type="square" isChecked={isDisplay} handleChange={handleChange} />
    </>
  );
}

export default App;
