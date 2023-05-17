import { useState } from "react";
import styles from "./App.module.css";
import { TiDelete } from "react-icons/ti";
import { BsFillPlusCircleFill } from "react-icons/bs";

function App() {
  const [appear, setAppear] = useState(false);

  console.log(appear);

  return (
    <div className={styles.Wrap}>
      <div className={styles.Box}>
        <button className={styles.InputAppearBtn}>
          {appear ? (
            <TiDelete style={{ fontSize: 80, color: "#ff6b6b" }} />
          ) : (
            <BsFillPlusCircleFill style={{ fontSize: 80, color: "#38d9a9" }} />
          )}
        </button>
      </div>
    </div>
  );
}

export default App;
