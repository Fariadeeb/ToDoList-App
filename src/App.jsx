import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import AddTodo from "./components/AddTodo";
import Todo from "./components/todos";

function App() {
  return (
    <>
      <Container>
        <Row className="justify-content-md-center">
          <Col md="auto">
            <h1 className="my-5">Whats the plan for today</h1>
            <AddTodo />
            <Todo />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
