import Button from "./components/button/Button";

import "../public/scss/index.scss";

import vite from "../public/vite.svg";
import logo from "./assets/react.svg";

function App() {
  return (
    <>
      <h1>App Home</h1>
      <Button title="測試按鈕" themeColor="#232323" fontColor="#ffffff" />
      <Button title="測試按鈕" themeColor="green" startIcon={vite} />
      <Button title="測試按鈕" handleClick={() => console.log("hello")} />
      <Button title="測試按鈕" endIcon={<img src={logo} />} />
      <Button title="測試按鈕" startIcon={<img src={logo} />} endIcon={vite}/>
    </>
  );
}

export default App;
