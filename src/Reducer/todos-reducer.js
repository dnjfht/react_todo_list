export default function todosReducer(todos, action) {
  switch (action.type) {
    case "added": {
      const { newTodo } = action;

      return [...todos, newTodo];
    }
    default: {
      throw Error(`알 수 없는 액션 타입이다 : ${action.type}`);
    }
  }
}
