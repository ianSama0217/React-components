import { useState } from "react";
import "../public/scss/index.scss";

import Checkbox from "./components/checkbox/Checkbox";

function App() {
  const [valueList, setValueList] = useState([
    {
      value: "1",
      labelText: "選項A",
      isChecked: false,
      labelFor: "A",
    },
    {
      value: "2",
      labelText: "選項B",
      isChecked: false,
      labelFor: "B",
    },
    {
      value: "3",
      labelText: "選項C",
      isChecked: false,
      labelFor: "C",
    },
    {
      value: "4",
      labelText: "選項D",
      isChecked: false,
      labelFor: "D",
    },
  ]);

  const [answer, setAnswer] = useState<string[]>([]);

  const handleCheckboxList = (index: number) => {
    const updatedCheckboxList = valueList.map((checkbox, i) => {
      if (i === index) {
        return { ...checkbox, isChecked: !checkbox.isChecked };
      }
      return { ...checkbox };
    });

    setValueList(updatedCheckboxList);

    const updateAnswer = updatedCheckboxList
      .filter((Checkbox) => Checkbox.isChecked)
      .map((checkbox) => checkbox.value);

    setAnswer(updateAnswer);
  };

  // 優化handleChange
  const handleCheckboxListOpti = (index: number) => {
    setValueList((preList) => {
      const updateList = preList.map((checkbox, i) =>
        i === index ? { ...checkbox, isChecked: !checkbox.isChecked } : checkbox
      );

      const updatedAnswer = updateList
        .filter((checkbox) => checkbox.isChecked)
        .map((checkbox) => checkbox.value);

      setAnswer(updatedAnswer);

      return updateList;
    });
  };

  return (
    <>
      <h1>App Home</h1>

      {valueList.map((checkbox, index) => (
        <Checkbox
          key={index}
          value={checkbox.value}
          labelText={checkbox.labelText}
          labelFor={checkbox.labelFor}
          isChecked={checkbox.isChecked}
          handleChange={() => handleCheckboxList(index)}
        />
      ))}
      <h3>checkbox checked value:{answer.join(", ")}</h3>
    </>
  );
}

export default App;
