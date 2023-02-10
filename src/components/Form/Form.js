import React from "react";
import Button from "../UI/Button";
import { v4 as uuidv4 } from "uuid";

const Form = ({ input, todos, setInput, setTodos }) => {
  const onInputChange = (event) => {
    setInput(event.target.value);
  };
  const onFormSubmit = (event) => {
    event.preventDefault();
    setTodos([...todos, { id: uuidv4(), title: input, completed: false }]);
  };
  return (
    <form onSubmit={onFormSubmit}>
      <input
        type="text"
        placeholder="Enter a task"
        value={input}
        required
        onChange={onInputChange}
      ></input>
      <Button type="submit">Add</Button>
    </form>
  );
};
export default Form;
