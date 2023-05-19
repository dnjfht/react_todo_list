export default function todosReducer(todos, action) {
  switch (action.type) {
    case "added": {
      const { newTodo } = action;

      return [...todos, newTodo];
    }
    case "statsSwitch": {
      return todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, isActive: !todo.isActive };
        }
        return todo;
      });
    }
    case "deleted": {
      return todos.filter((todo) => todo.id !== id);
    }
    default: {
      throw Error(`알 수 없는 액션 타입이다 : ${action.type}`);
    }
  }
}
