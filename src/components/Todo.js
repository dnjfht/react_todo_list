import React from "react";

export default function Todo({ filterTodo }) {
  return (
    <div key={filterTodo.id}>
      <h2>{filterTodo.date}</h2>
      <p>{filterTodo.day}</p>
      <p>{filterTodo.title}</p>
    </div>
  );
}
