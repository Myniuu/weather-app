import { useState } from "react";
import { Header } from "./components/Header/Header";
import { Info } from "./components/Info/Info";

export function App() {
  const [inputValue, setInputValue] = useState("");
  const [data, setData] = useState({});
  const [cityName, setCityName] = useState("");

  function handleButtonClick() {
    if (inputValue.trim !== "") {
      callWeather(inputValue);
      setInputValue("");
    }
  }

  function handleChange(e) {
    setInputValue(e.target.value);
  }

  function callWeather(city) {
    fetch(
      `http://api.weatherapi.com/v1/current.json?key=2dd80bf3d57945faa57154500242404&q=${city}&aqi=no`
    )
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network error!");
        }
        return res.json();
      })
      .then((data) => setData(data.current), setCityName(city))
      .catch((err) => console.error("Data fetching error!", err));
  }

  return (
    <>
      <Header
        onClick={handleButtonClick}
        onChange={handleChange}
        value={inputValue}
      />
      <Info
        city={cityName}
        pressure={data.pressure_mb}
        temperature={data.temp_c}
        wind={data.wind_kph}
        clouds={data.cloud}
      />
    </>
  );
}
