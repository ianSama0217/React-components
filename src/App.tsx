import { useState } from "react";
import "../public/scss/index.scss";

import Radio from "./components/radio/Radio";

function App() {
  const [value, setValue] = useState("A");
  const [labelText, setLabelText] = useState("選項1");
  const [isChecked, setIsChecked] = useState(false);
  const handleValue = () => {
    console.log("value = " + value);
    console.log("label = " + labelText);
    setIsChecked(!isChecked);
  };

  return (
    <>
      <h1>App Home</h1>
      <Radio
        value={value}
        labelText={labelText}
        isChecked={isChecked}
        handleChange={handleValue}
      />
    </>
  );
}

export default App;
