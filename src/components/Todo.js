import React, { useState } from "react";
import styles from "../App.module.css";
import { ImQuill } from "react-icons/im";
import { BsCircle, BsCheckCircle } from "react-icons/bs";
import { HiTrash } from "react-icons/hi";
import { useNavigate } from "react-router-dom";

export default function Todo({
  filterTodo,
  handleOnClickStatsSwitch,
  handleOnClickDeleteTodo,
}) {
  const [appearDeleteBtn, setAppearDeleteBtn] = useState(false);

  const navigate = useNavigate();

  return (
    <div
      key={filterTodo.id}
      className={styles.Todo}
      onMouseOver={() => {
        setAppearDeleteBtn(true);
      }}
      onMouseLeave={() => {
        setAppearDeleteBtn(false);
      }}
    >
      <ImQuill
        style={{
          color: "var(--color-accent)",
          fontSize: 26,
          position: "absolute",
          top: -3,
          left: -2,
        }}
      />

      <button
        onClick={() => handleOnClickStatsSwitch(filterTodo.id)}
        className={styles.StatsSwitchBtn}
      >
        {filterTodo.isActive ? (
          <BsCircle style={{ fontSize: 22, color: "var(--color-accent)" }} />
        ) : (
          <BsCheckCircle
            style={{ fontSize: 22, color: "var(--color-accent)" }}
          />
        )}
      </button>

      <div className={styles.ContentWrap}>
        <h2
          style={{
            fintSize: 22,
            margin: 0,
            color: "var(--color-text)",
            textDecoration: filterTodo.isActive ? "" : "line-through",
          }}
        >
          {filterTodo.date}
        </h2>
        <p
          style={{
            margin: 0,
            marginTop: 4,
            fontSize: 14,
            color: "var(--color-gray)",
            textDecoration: filterTodo.isActive ? "" : "line-through",
          }}
        >
          {filterTodo.day}
        </p>
        <p
          onClick={() => {
            navigate(`/detail/${filterTodo.id}`);
          }}
          style={{
            margin: 0,
            marginTop: 12,
            fontSize: 17,
            color: filterTodo.isActive
              ? "var(--color-text)"
              : "var(--color-bg)",
            textDecoration: filterTodo.isActive ? "" : "line-through",
            cursor: "pointer",
          }}
        >
          {filterTodo.title}
        </p>
      </div>

      {appearDeleteBtn ? (
        <button
          className={styles.DeleteBtn}
          onClick={() => handleOnClickDeleteTodo(filterTodo.id)}
        >
          <HiTrash style={{ fontSize: 20, color: "var(--color-white)" }} />
        </button>
      ) : (
        <div style={{ width: 26, height: 26 }}></div>
      )}
    </div>
  );
}
