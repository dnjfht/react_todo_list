import React, { useState } from "react";
import styles from "../App.module.css";
import { v4 as uuidv4 } from "uuid";

export default function InputWrap({ dispatch }) {
  const [title, setTitle] = useState("");

  const handleOnChangeTitle = (e) => {
    setTitle(e.target.value);
  };

  const handleOnClickAddTodo = (e) => {
    e.preventDefault();

    let today = new Date();

    const day = ["일", "월", "화", "수", "목", "금", "토"];

    const newTodo = {
      id: uuidv4(),
      date: `${today.getFullYear()}년 ${
        today.getMonth() + 1
      }월 ${today.getDate()}일`,
      day: `${day[today.getDay()]}요일`,
      title: title,
      isActive: true,
    };

    dispatch({ type: "added", newTodo });

    setTitle("");
  };

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
