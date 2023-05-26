import { useState } from "react";
import { useDispatch } from "react-redux";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { addTodo } from "../redux/todo/action";

function AddTodo() {
  const dispatch = useDispatch();
  const [todoValue, setTodoValue] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    let date = new Date();
    let time = date.getTime();
    let todoObj = {
      id: time,
      todo: todoValue,
      completed: false,
    };
    setTodoValue("");
    dispatch(addTodo(todoObj));
  };
  return (
    <Form style={{ display: "flex", marginBottom: 20 }} onSubmit={handleSubmit}>
      <Form.Control type="text" placeholder="What to do" required value={todoValue} onChange={(e) => setTodoValue(e.target.value)} />
      <Button variant="primary" type="submit" className="ms-3">
        Submit
      </Button>
    </Form>
  );
}

export default AddTodo;
