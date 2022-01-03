import React from 'react';
import './App.css';
//Importing Components
import TodoForm from './components/TodoForm';
 

function App() {
  return (
    <div className="App">
      <header>
        <h1>Todo List</h1>
      </header>
      <TodoForm />
    </div>
  );
}

export default App;
