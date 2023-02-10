import React from "react";

const TodoList = ({ todos, setTodos, setEditTodo }) => {
  const handleComplete = (todo) => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return { ...item, completed: !item.completed };
        }
        return item;
      })
    );
  };
  const handleEdit = ({ id }) => {
    const findTodo = todos.find((todo) => todo.id === id);
    setEditTodo(findTodo);
  };
  const handleDelete = ({ id }) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };
  return (
    <div>
      {todos.map((todo) => (
        <li
          className={`list-item ${todo.completed ? "complete" : ""}`}
          key={todo.id}
        >
          <input
            type="text"
            value={todo.title}
            className="list"
            onChange={(event) => event.target.value}
          />
          <div>
            <button className="button-complete task-button">
              <i
                className="fa fa-check-circle"
                onClick={() => handleComplete(todo)}
              ></i>
            </button>
            <button className="button-edit task-button">
              <i className="fa fa-edit" onClick={() => handleEdit(todo)}></i>
            </button>
            <button className="button-delete task-button">
              <i className="fa fa-trash" onClick={() => handleDelete(todo)}></i>
            </button>
          </div>
        </li>
      ))}
    </div>
  );
};

export default TodoList;
