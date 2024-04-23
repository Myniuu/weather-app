import styles from "./Info.module.css";

export function Info() {
  return (
    <div className={styles.container}>
      <h2>Warsaw</h2>
      <h3>broken clouds</h3>
      <h3>9 celcius</h3>
      <h3>4.47 km/h</h3>
      <h3>72 %</h3>
    </div>
  );
}
