import styles from "./Info.module.css";

export function Info({ city, temperature, wind, clouds, pressure }) {
  return (
    <div className={styles.container}>
      <h2>{city}</h2>
      <h3>Pressure: {pressure} hpa</h3>
      <h3>Temperature: {temperature} °C</h3>
      <h3>Wind: {wind} km/h</h3>
      <h3>Clouds: {clouds} % cloudy</h3>
    </div>
  );
}
