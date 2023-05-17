import React from "react";
import styles from "../App.module.css";
import { CiLight, CiDark } from "react-icons/ci";

export default function NavBar({
  darkMode,
  setDarkMode,
  filters,
  filter,
  setFilter,
}) {
  console.log(filter);

  return (
    <div className={styles.NavBar}>
      <button
        onClick={() => {
          setDarkMode((prev) => !prev);
        }}
        className={styles.DarkModeBtn}
      >
        {darkMode ? (
          <CiLight style={{ fontSize: 24, color: "var(--color-accent)" }} />
        ) : (
          <CiDark style={{ fontSize: 24, color: "var(--color-accent)" }} />
        )}
      </button>

      <ul className={styles.FilterNav}>
        {filters.map((f, index) => {
          return (
            <li key={index} className={styles.FilterList}>
              <button
                onClick={() => {
                  setFilter(f);
                }}
                className={styles.FilterBtn}
              >
                {f}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
