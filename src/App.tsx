import { useState } from "react";
import "../public/scss/index.scss";
import Button from "./components/button";
import icon from "./assets/react.svg";

function App() {
  const [count, setCount] = useState(0);

  const addFn = () => {
    setCount(count + 1);
  };

  return (
    <>
      <h1>App Home</h1>
      <Button title="測試" onClick={addFn} startIcon={icon} endIcon={icon} />
      <Button variant="primary" title="primary" />
      <Button variant="secondary" title="secondary" />
      <Button variant="success" title="success" />
      <Button variant="danger" title="danger" />
      <Button variant="warning" title="warning" />
      <Button title="any" buttonId="free" />
      <h3>{count}</h3>
    </>
  );
}

export default App;
