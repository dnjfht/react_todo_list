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

      <ul>
        {filters.map((f, index) => {
          return (
            <li key={index}>
              <button
                onClick={() => {
                  setFilter(f);
                }}
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
