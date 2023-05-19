import React, { useState } from "react";
import styles from "../App.module.css";
import { useParams, useNavigate } from "react-router-dom";
import { BsCircle, BsCheckCircle } from "react-icons/bs";
import { HiTrash } from "react-icons/hi";

export default function Detail({
  todos,
  handleOnClickStatsSwitch,
  handleOnClickDeleteTodo,
}) {
  const params = useParams().id;
  console.log(params);

  const todo = todos.filter((todo) => todo.id === params);
  console.log(todo);

  const navigate = useNavigate();

  const [appearDeleteBtn, setAppearDeleteBtn] = useState(false);

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
                onMouseOver={() => {
                  setAppearDeleteBtn(true);
                }}
                onMouseLeave={() => {
                  setAppearDeleteBtn(false);
                }}
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <button
                    className={styles.DetailIsActiveBtn}
                    onClick={() => handleOnClickStatsSwitch(t.id)}
                  >
                    {t.isActive ? (
                      <BsCircle
                        style={{
                          fontSize: 35,
                          color: "var(--color-accent)",
                        }}
                      />
                    ) : (
                      <BsCheckCircle
                        style={{
                          fontSize: 35,
                          color: "var(--color-accent)",
                        }}
                      />
                    )}
                  </button>
                  <p
                    style={{
                      margin: 0,
                      fontSize: 18,
                      color: "var(--color-text)",
                      fontWeight: 100,
                      textDecoration: t.isActive ? "" : "line-through",
                      color: t.isActive
                        ? "var(--color-text)"
                        : "var(--color-gray)",
                    }}
                  >
                    {t.title}
                  </p>
                </div>

                {appearDeleteBtn ? (
                  <button
                    className={styles.DetailDeleteeBtn}
                    onClick={() => {
                      handleOnClickDeleteTodo(t.id);
                      navigate("/");
                    }}
                  >
                    <HiTrash
                      style={{ fontSize: 20, color: "var(--color-bg)" }}
                    />
                  </button>
                ) : (
                  <div></div>
                )}
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
