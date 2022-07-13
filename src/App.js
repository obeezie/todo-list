import logo from './logo.svg';
import './App.css';
import TodoForm from './components/TodoForm';
import React, { useState } from 'react'
import TodoDisplay from './components/TodoDisplay';


function App() {
  const [todo, setTodo] = useState([])

  const receiveTodo = (newTodo) => {
    setTodo([...todo, newTodo])
  }

  const updateTodo = (updatedTodo) => {
    setTodo(updatedTodo)
  }

  return (
    <div className="App">
      <TodoForm onNewTodo={receiveTodo} />
      <TodoDisplay todo={todo} onTodoUpdate={updateTodo} />
    </div>
  );
}

export default App;
