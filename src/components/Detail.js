import React from "react";
import styles from "../App.module.css";
import { useParams } from "react-router-dom";

export default function Detail({ todos }) {
  const params = useParams().id;
  console.log(params);

  const todo = todos.filter((todo) => todo.id === params);
  console.log(todo);

  return (
    <div className={styles.Detail}>
      <ul className={styles.DetailContent}>
        {todo.map((t) => {
          return (
            <li key={t.id}>
              <div style={{ borderBottom: "1px solid var(--color-bg)" }}>
                <h1>{t.date}</h1>
                <p>{t.day}</p>
              </div>

              <p>{t.title}</p>
              <p>isActive : {t.isActive.toString()}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
