import logo from './logo.svg';
import './App.css';
import TodoList from "./TodoList";
import React, { useState } from 'react';

const App = () => {
  const [todos, setTasks] = useState([]);
  const[newTodo, setNewTodo] = useState("");

  const handleTasks = () => {
    // does exist
    if (newTodo.trim() != "") {
      setTasks([...todos, {text: newTodo.trim(), checked: false}]);
      setNewTodo("");

    }
  };

  const handleDelete = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index,1);
    setTasks(newTodos);
  }

  const handleToggle = (index) => {
    const newTodos = [...todos];
    newTodos[index].checked = !newTodos[index].checked;
    setTasks(newTodos);

    
  };
  return (
    <div>
      <TodoList/>
      <input type="text" value={newTodo} onChange={(e) => setNewTodo(e.target.value)}/>
      <button onClick={(handleTasks)}>Add</button>

      <ul>
        {todos.map((todos,index) => (
          <li key={index}>
            <input type="checkbox" checked={todos.checked} onChange={ () => handleToggle(index)}
          />
          <span>
            {todos.text}
          </span>
          <button onClick={() => handleDelete(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
