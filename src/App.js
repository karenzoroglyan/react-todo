import React from 'react';
import './App.css';
//Importing Components
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

function App() {
  return (
    <div className="App">
      <header>
        <h1>Todo List</h1>
      </header>
      <TodoForm />
      <TodoList />
    </div>
  );
}

export default App;
