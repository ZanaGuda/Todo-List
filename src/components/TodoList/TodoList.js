import React from "react";

const TodoList = ({ todos, setTodos }) => {
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
              <i className="fa fa-check-circle"></i>
            </button>
            <button>
              <i className="fa fa-edit"></i>
            </button>
            <button>
              <i className="fa fa-trash"></i>
            </button>
          </div>
        </li>
      ))}
    </div>
  );
};

export default TodoList;
