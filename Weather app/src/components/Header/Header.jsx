import styles from "./Header.module.css";

export function Header({ value, onClick, onChange }) {
  return (
    <div className={styles.header}>
      <h1>Weather</h1>
      <div className={styles.container}>
        <input
          value={value}
          onChange={onChange}
          type="text"
          placeholder="Write city..."
        />
        <button onClick={onClick}>Search</button>
      </div>
    </div>
  );
}
