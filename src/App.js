import { useState } from "react";
import styles from "./App.module.css";
import { BsFillPlusCircleFill, BsFillXCircleFill } from "react-icons/bs";
import InputWrap from "./components/InputWrap";
import NavBar from "./components/NavBar";
import TodoList from "./components/TodoList";
import { v4 as uuidv4 } from "uuid";

const initialState = [
  {
    id: uuidv4(),
    date: "2023년 4월 14일",
    day: "금요일",
    title: "React 완주 중",
    isActive: true,
  },
  {
    id: uuidv4(),
    date: "2023년 4월 20일",
    day: "목요일",
    title: "다이어트 중",
    isActive: true,
  },
  {
    id: uuidv4(),
    date: "2023년 4월 27일",
    day: "목요일",
    title: "충분히 자기",
    isActive: false,
  },
  {
    id: uuidv4(),
    date: "2023년 4월 30일",
    day: "일요일",
    title: "산책 자주 하기",
    isActive: false,
  },
  {
    id: uuidv4(),
    date: "2023년 5월 3일",
    day: "수요일",
    title: "책 한 권 읽기",
    isActive: false,
  },
  {
    id: uuidv4(),
    date: "2023년 5월 6일",
    day: "토요일",
    title: "옷 사기",
    isActive: false,
  },
  {
    id: uuidv4(),
    date: "2023년 5월 17일",
    day: "수요일",
    title: "Javascript 문법 꾸준히 공부하기",
    isActive: true,
  },
];

function App() {
  const [todos, setTodos] = useState(initialState);
  const [appear, setAppear] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const filters = ["All", "Active", "Completed"];
  const [filter, setFilter] = useState(filters[0]);

  const filtered = getFilteredItems(todos, filter);

  function getFilteredItems(todos, filter) {
    if (filter === "All") {
      return todos;
    } else if (filter === "Active") {
      return todos.filter((todo) => todo.isActive === true);
    } else if (filter === "Completed") {
      return todos.filter((todo) => todo.isActive === false);
    }
  }

  console.log(filtered);

  return (
    <div className={styles.Wrap}>
      <div className={styles.Box}>
        <NavBar
          darkMode={darkMode}
          setDarkMode={setDarkMode}
          filters={filters}
          filter={filter}
          setFilter={setFilter}
        />

        <TodoList filtered={filtered} />

        {appear && <InputWrap />}
      </div>

      <button
        onClick={() => {
          setAppear((prev) => !prev);
        }}
        className={styles.InputAppearBtn}
      >
        {appear ? (
          <BsFillXCircleFill style={{ fontSize: 80, color: "#ff6b6b" }} />
        ) : (
          <BsFillPlusCircleFill style={{ fontSize: 80, color: "#38d9a9" }} />
        )}
      </button>
    </div>
  );
}

export default App;
