import React, {useState} from 'react';
import './App.css';
//Importing Components
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

function App() {
  const [inputText, setInputText] = useState('');
  const [todos, setTodos] = useState([]);
  return (
    <div className="App">
      <header>
        <h1>Todo List</h1>
      </header>
      <TodoForm todos={todos} setTodods={setTodos} InputText={inputText} setInputText={setInputText}/>
      <TodoList />
    </div>
  );
}

export default App;
