import { useSelector, useDispatch } from "react-redux";
import { Icon } from "react-icons-kit";
import { trash } from "react-icons-kit/feather/trash";
import { removeTodo, handleCheckbox } from "../redux/todo/action";

function Todo() {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.operationalReducer);
  console.log(todos);
  return todos.map((todo) => (
    <div key={todo.id} className="todos justify-content-between py-2" style={{ display: "flex" }}>
      <div className="content" style={{ display: "flex" }}>
        <input type="checkbox" checked={todo.completed} onChange={() => dispatch(handleCheckbox(todo.id))}></input>
        <p
          style={
            todo.completed === true
              ? { textDecoration: "line-through", marginLeft: 10, marginBottom: 0 }
              : { textDecoration: "none", marginLeft: 10, marginBottom: 0 }
          }
        >
          {todo.todo}
        </p>
      </div>
      <div className="actions-box">
        <span onClick={() => dispatch(removeTodo(todo.id))}>
          <Icon icon={trash} />
        </span>
      </div>
    </div>
  ));
}

export default Todo;
