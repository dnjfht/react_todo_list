import { useState } from "react";
import styles from "./App.module.css";
import { BsFillPlusCircleFill, BsFillXCircleFill } from "react-icons/bs";
import InputWrap from "./components/InputWrap";
import NavBar from "./components/NavBar";

function App() {
  const [appear, setAppear] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const filters = ["All", "Active", "Completed"];
  const [filter, setFilter] = useState(filters[0]);

  return (
    <div className={styles.Wrap}>
      <div className={styles.Box}>
        <NavBar
          darkMode={darkMode}
          setDarkMode={setDarkMode}
          filters={filters}
          filter={filter}
          setFilter={setFilter}
        />
        {appear && <InputWrap />}
      </div>

      <button
        onClick={() => {
          setAppear((prev) => !prev);
        }}
        className={styles.InputAppearBtn}
      >
        {appear ? (
          <BsFillXCircleFill style={{ fontSize: 80, color: "#ff6b6b" }} />
        ) : (
          <BsFillPlusCircleFill style={{ fontSize: 80, color: "#38d9a9" }} />
        )}
      </button>
    </div>
  );
}

export default App;
