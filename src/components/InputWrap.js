import React from "react";
import styles from "../App.module.css";

export default function InputWrap({
  handleOnClickAddTodo,
  handleOnChangeTitle,
  title,
}) {
  return (
    <div className={styles.InputWrap}>
      <input
        className={styles.InputTodo}
        type="text"
        placeholder="Write Todo..."
        value={title}
        onChange={handleOnChangeTitle}
      />
      <button onClick={handleOnClickAddTodo} className={styles.SubmitBtn}>
        Add
      </button>
    </div>
  );
}
