import React, { useContext } from "react";
import styles from "../App.module.css";
import { CiLight, CiDark } from "react-icons/ci";
import { DarkModeContext } from "../Context/DarkModeContext";

export default function NavBar({ filters, filter, setFilter }) {
  console.log(filter);

  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);

  return (
    <div className={styles.NavBar}>
      <button onClick={toggleDarkMode} className={styles.DarkModeBtn}>
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
