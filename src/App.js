import logo from './logo.svg';
import './App.css';
import TodoList from "./TodoList";
import React, { useState } from 'react';

const App = () => {
  const [todos, setTodos] = useState([]);
  const[newTodo, setNewTodo] = useState("");

  const handleTasks = () => {
    // does exist
    if (newTodo.trim() != "") {
      setTodos([...todos, {text: newTodo.trim(), check: false}]);
      setNewTodo("");

    }
  };

  const handleDelete = (index) => {
    
  };

  const handleToggle = (index) => {
    
  };
  return (
    <div>
      <TodoList/>
    </div>
  );
}

export default App;
