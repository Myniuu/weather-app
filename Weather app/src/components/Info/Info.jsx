import styles from "./Info.module.css";

export function Info({ city, temperature, wind, clouds }) {
  return (
    <div className={styles.container}>
      <h2>{city}</h2>
      <h3>broken clouds</h3>
      <h3>{temperature} °C</h3>
      <h3>{wind} km/h</h3>
      <h3>{clouds} %</h3>
    </div>
  );
}
