import styles from "./Header.module.css";

export function Header() {
  return (
    <div className={styles.header}>
      <h1>Weather</h1>
      <div className={styles.container}>
        <input type="text" placeholder="Write city..." />
        <button>Search</button>
      </div>
    </div>
  );
}
