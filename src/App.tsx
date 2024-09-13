import { useState } from "react";
import "../public/scss/index.scss";

import Input from "./components/input/input";

function App() {
  const [text, setText] = useState("");
  const [num, setNum] = useState("");
  const [date, setDate] = useState("");
  const [color, setColor] = useState("");

  const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const handleNumChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNum(e.target.value);
  };

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDate(e.target.value);
  };

  const handleColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setColor(e.target.value);
  };

  return (
    <>
      <h1>App Home</h1>

      <Input
        arrange="row"
        value={text}
        labelText="測試001"
        handleChange={handleTextChange}
      />
      <p>{text}</p>

      <Input
        value={num}
        labelText="測試002"
        type="number"
        handleChange={handleNumChange}
      />
      <p>{num}</p>

      <Input
        value={date}
        labelText="測試003"
        type="date"
        handleChange={handleDateChange}
      />
      <p>{date}</p>

      <Input
        value={color}
        labelText="測試004"
        type="color"
        handleChange={handleColorChange}
      />
      <p>{color}</p>
    </>
  );
}

export default App;
