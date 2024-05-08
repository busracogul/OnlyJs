import { useState } from 'react';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

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
      <div className='col-3'>
        <InputGroup className="mb-3" >
          <Form.Label>Hedef</Form.Label>
          <Form.Control
            onChange={(e) => setTodoInput(e.target.value)}
            value={todoInput}
          />
          <Button variant="outline-secondary" id="button-addon2" onClick={addTodo}>
            Ekle
          </Button>
        </InputGroup>
      </div>

      <ul>
        {
          todos.map((todo, index) => (
            <li key={index} onClick={() => removeTodo(index)}>{todo}</li>
          ))
        }
      </ul>
    </>
  )
}

export default App



// import React, { useState } from 'react';
// import { Form, Button } from 'react-bootstrap';
// import styled from 'styled-components';

// const TodoInput = () => {
//   const [todoInput, setTodoInput] = useState('');
//   const [todos, setTodos] = useState([]);

//   const addTodo = () => {
//     setTodos([...todos, todoInput]);
//     setTodoInput('');
//   };

//   const removeTodo = (index) => {
//     const newTodos = todos.filter((_, i) => i !== index);
//     setTodos(newTodos);
//   };

//   return (
//     <div>
//       <Form.Group>
//         <Form.Label>Hedef</Form.Label>
//         <Form.Control
//           type="text"
//           value={todoInput}
//           onChange={(e) => setTodoInput(e.target.value)}
//         />
//       </Form.Group>
//       <Button variant="primary" onClick={addTodo}>
//         Ekle
//       </Button>
//       <TodoList>
//         {todos.map((todo, index) => (
//           <li key={index} onClick={() => removeTodo(index)}>
//             {todo}
//           </li>
//         ))}
//       </TodoList>
//     </div>
//   );
// };

// const TodoList = styled.ul`
//   li {
//     cursor: pointer;
//     &:hover {
//       background-color: lightgray;
//     }
//   }
// `;

// export default TodoInput;
