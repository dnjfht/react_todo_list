import React from "react";
import styles from "../App.module.css";
import { useParams, useNavigate } from "react-router-dom";
import { BsCircle, BsCheckCircle } from "react-icons/bs";

export default function Detail({ todos }) {
  const params = useParams().id;
  console.log(params);

  const todo = todos.filter((todo) => todo.id === params);
  console.log(todo);

  const navigate = useNavigate();

  return (
    <div className={styles.Detail}>
      <ul className={styles.DetailContent}>
        {todo.map((t) => {
          return (
            <li key={t.id}>
              <h1
                style={{
                  margin: 0,
                  textDecoration: t.isActive ? "" : "line-through",
                  color: "var(--color-text)",
                }}
              >
                {t.date}
              </h1>
              <p
                style={{
                  margin: 0,
                  margin: "10px 0 26px 0",
                  fontSize: 17,
                  color: "var(--color-gray)",
                  fontWeight: 100,
                  textDecoration: t.isActive ? "" : "line-through",
                }}
              >
                {t.day}
              </p>

              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                {t.isActive ? (
                  <BsCircle
                    style={{
                      fontSize: 35,
                      color: "var(--color-accent)",
                      marginRight: 20,
                    }}
                  />
                ) : (
                  <BsCheckCircle
                    style={{
                      fontSize: 35,
                      color: "var(--color-accent)",
                      marginRight: 20,
                    }}
                  />
                )}
                <p
                  style={{
                    margin: 0,
                    fontSize: 18,
                    color: "var(--color-text)",
                    fontWeight: 100,
                    textDecoration: t.isActive ? "" : "line-through",
                    color: t.isActive ? "var(--color-text)" : "var(--color-bg)",
                  }}
                >
                  {t.title}
                </p>
              </div>
            </li>
          );
        })}
      </ul>
      <button
        onClick={() => {
          navigate("/");
        }}
        className={styles.GoHomeBtn}
      >
        Go Home
      </button>
    </div>
  );
}
