import React from "react";
import styles from "../App.module.css";
import { ImQuill } from "react-icons/im";
import { BsCircle, BsCheckCircle } from "react-icons/bs";
import { HiTrash } from "react-icons/hi";

export default function Todo({ filterTodo, handleOnClickStatsSwitch }) {
  return (
    <div key={filterTodo.id} className={styles.Todo}>
      <ImQuill
        style={{
          color: "var(--color-accent)",
          fontSize: 26,
          position: "absolute",
          top: -3,
          left: -2,
        }}
      />

      <button onClick={() => handleOnClickStatsSwitch(filterTodo.id)}>
        {filterTodo.isActive ? <BsCircle /> : <BsCheckCircle />}
      </button>

      <h2 style={{ margin: 0, color: "var(--color-text)" }}>
        {filterTodo.date}
      </h2>
      <p
        style={{
          margin: 0,
          marginTop: 4,
          fontSize: 14,
          color: "var(--color-gray)",
        }}
      >
        {filterTodo.day}
      </p>
      <p
        style={{
          margin: 0,
          marginTop: 12,
          fontSize: 17,
          color: "var(--color-text)",
        }}
      >
        {filterTodo.title}
      </p>
    </div>
  );
}
