import React, { useEffect } from "react";
import Button from "../UI/Button";
import { v4 as uuidv4 } from "uuid";

const Form = ({ input, todos, setInput, setTodos, editTodo, setEditTodo }) => {
  const updateTodo = (title, id, completed) => {
    const newTodo = todos.map((todo) =>
      todo.id === id ? { title, id, completed } : todo
    );
    setTodos(newTodo);
    setEditTodo("");
  };
  useEffect(() => {
    if (editTodo) {
      setInput(editTodo.title);
    } else {
      setInput("");
    }
  }, [setInput, editTodo]);
  const onInputChange = (event) => {
    setInput(event.target.value);
  };
  const onFormSubmit = (event) => {
    event.preventDefault();
    if (!editTodo) {
      setTodos([...todos, { id: uuidv4(), title: input, completed: false }]);
      setInput("");
    } else {
      updateTodo(input, editTodo.id, editTodo.completed);
    }
  };
  return (
    <form onSubmit={onFormSubmit}>
      <input
        type="text"
        placeholder="Enter a task"
        className="task-input"
        value={input}
        required
        onChange={onInputChange}
      ></input>
      <Button className="button-add" type="submit">
        {editTodo ? "OK" : "Add"}
      </Button>
    </form>
  );
};
export default Form;
