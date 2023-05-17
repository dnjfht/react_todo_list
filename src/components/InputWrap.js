import React from "react";
import styles from "../App.module.css";

export default function InputWrap() {
  return (
    <div className={styles.InputWrap}>
      <input
        className={styles.InputTodo}
        type="text"
        placeholder="Write Todo..."
      />
      <button className={styles.SubmitBtn}>Add</button>
    </div>
  );
}
