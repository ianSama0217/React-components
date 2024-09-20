import { useState } from "react";
import "../public/scss/index.scss";

import Slider from "./components/slider/Slider";

function App() {
  const [sliderValue, setSliderValue] = useState(20);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = Number(e.target.value);
    setSliderValue(newValue);
    // console.log("value", sliderValue);
  };

  return (
    <>
      <h1>App Home</h1>
      <Slider
        min={0}
        max={100}
        step={5}
        labelText={"評分"}
        value={sliderValue}
        handleChange={handleChange}
      />
    </>
  );
}

export default App;
