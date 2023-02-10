import React from "react";

const TodoList = ({ todos, setTodos }) => {
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
  const handleDelete = ({ id }) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };
  return (
    <div>
      {todos.map((todo) => (
        <li key={todo.id}>
          <input
            type="text"
            value={todo.title}
            onChange={(event) => event.target.value}
          />
          <div>
            <button>
              <i
                className="fa fa-check-circle"
                onClick={() => handleComplete(todo)}
              ></i>
            </button>
            <button>
              <i className="fa fa-edit"></i>
            </button>
            <button>
              <i className="fa fa-trash" onClick={() => handleDelete(todo)}></i>
            </button>
          </div>
        </li>
      ))}
    </div>
  );
};

export default TodoList;
