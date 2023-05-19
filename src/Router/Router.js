import React from "react";
import { Route, Routes } from "react-router-dom";
import TodoList from "../components/TodoList";
import Detail from "../components/Detail";
import NotFoundPage from "../components/NotFoundPage";

export default function Router({ filtered, todos, dispatch }) {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={<TodoList dispatch={dispatch} filtered={filtered} />}
        />
        <Route
          path="/detail/:id"
          element={<Detail todos={todos} dispatch={dispatch} />}
        />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}
