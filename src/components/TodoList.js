import React from "react";
import styles from "../App.module.css";
import Todo from "./Todo";

export default function TodoList({
  filtered,
  handleOnClickStatsSwitch,
  handleOnClickDeleteTodo,
}) {
  return (
    <div className={styles.TodoList}>
      {filtered.map((filterTodo) => {
        return (
          <Todo
            key={filterTodo.id}
            filterTodo={filterTodo}
            handleOnClickStatsSwitch={handleOnClickStatsSwitch}
            handleOnClickDeleteTodo={handleOnClickDeleteTodo}
          />
        );
      })}
    </div>
  );
}
