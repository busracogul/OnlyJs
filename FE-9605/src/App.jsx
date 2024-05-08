import { useState } from 'react';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import styled from 'styled-components';

const Div = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: radial-gradient(circle, rgba(238,174,202,1) 11%, rgba(148,187,233,1) 90%);`

const FormLabel = styled(Form.Label)`
  font-size:2rem; 
  color:#d74082;`

const Li = styled.li`
  color: #316aad;
  display:block;
  margin-top: 10px;`

function App() {
  const [todoInput, setTodoInput] = useState("");
  const [todos, setTodos] = useState([]);

  function addTodo() {
    setTodos([...todos, todoInput]);
    setTodoInput("");
  }

  const removeTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  return (
    <>
      <Div>
        <div className='col-3 text-center'>
          <FormLabel>Hedef</FormLabel>
          <InputGroup className="mb-3" >
            <Form.Control
              onChange={(e) => setTodoInput(e.target.value)}
              value={todoInput}
            />
            <Button variant="outline-secondary" id="button-addon2" onClick={addTodo}>
              Ekle
            </Button>
          </InputGroup> 
          <ul>
          {
            todos.map((todo, index) => (
              <Li key={index} onClick={() => removeTodo(index)}><li>{todo}</li></Li>
            ))
          }
        </ul>
        </div>
      </Div>
    </>
  )
}

export default App