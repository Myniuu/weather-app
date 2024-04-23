import { useState } from "react";
import { Header } from "./components/Header/Header";
import { Info } from "./components/Info/Info";

export function App() {
  const [inputValue, setInputValue] = useState("");

  function handleButtonClick() {
    console.log(inputValue);
    setInputValue("");
  }

  function handleChange(e) {
    setInputValue(e.target.value);
  }

  return (
    <>
      <Header
        onClick={handleButtonClick}
        onChange={handleChange}
        value={inputValue}
      />
      <Info />
    </>
  );
}
