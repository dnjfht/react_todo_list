import React from "react";
import { Route, Routes } from "react-router-dom";
import TodoList from "../components/TodoList";
import Detail from "../components/Detail";
import NotFoundPage from "../components/NotFoundPage";

export default function Router({
  filtered,
  handleOnClickStatsSwitch,
  handleOnClickDeleteTodo,
}) {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <TodoList
              filtered={filtered}
              handleOnClickDeleteTodo={handleOnClickDeleteTodo}
              handleOnClickStatsSwitch={handleOnClickStatsSwitch}
            />
          }
        />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}
