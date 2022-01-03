import React from "react";
import Todo from "./Todo";

function TodoList() {
  return (
    <div className="todo-container">
      <ul className="todo-list">
          <Todo />
          <Todo />
          <Todo />
          <Todo />
          <Todo />
      </ul>
    </div>
  );
}

export default TodoList;
