import { useState } from "react";
import "../public/scss/index.scss";

import Radio from "./components/radio/Radio";

function App() {
  const [radioValueList, setRadioValueList] = useState([
    {
      name: "test",
      value: "1",
      labelText: "選項A",
      isChecked: false,
      labelFor: "A",
    },
    {
      name: "test",
      value: "2",
      labelText: "選項B",
      isChecked: false,
      labelFor: "B",
    },
    {
      name: "test",
      value: "3",
      labelText: "選項C",
      isChecked: false,
      labelFor: "C",
    },
    {
      name: "test",
      value: "4",
      labelText: "選項D",
      isChecked: false,
      labelFor: "D",
    },
  ]);

  const handleRadioList = (index: number) => {
    console.log(index);
    const updatedRadioList = radioValueList.map((radio, i) => ({
      ...radio,
      isChecked: i === index,
    }));
    setRadioValueList(updatedRadioList);
    console.log(radioValueList);
  };

  return (
    <>
      <h1>App Home</h1>

      {radioValueList.map((radio, index) => (
        <Radio
          key={index}
          name={radio.name}
          value={radio.value}
          labelText={radio.labelText}
          isChecked={radio.isChecked}
          handleChange={() => {
            handleRadioList(index);
          }}
          labelFor={radio.labelFor}
        />
      ))}
    </>
  );
}

export default App;
