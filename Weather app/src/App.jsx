import { useState } from "react";
import { Header } from "./components/Header/Header";
import { Info } from "./components/Info/Info";

export function App() {
  const [inputValue, setInputValue] = useState("");
  const [data, setData] = useState([]);

  function handleButtonClick() {
    callWeather(inputValue);
    setInputValue("");
  }

  function handleChange(e) {
    setInputValue(e.target.value);
  }

  function callWeather(city) {
    fetch(
      `http://api.weatherapi.com/v1/current.json?key=2dd80bf3d57945faa57154500242404&q=${city}&aqi=no`
    )
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((res) => console.log(res));
  }

  return (
    <>
      <Header
        onClick={handleButtonClick}
        onChange={handleChange}
        value={inputValue}
      />
      <Info city={data} />
    </>
  );
}
