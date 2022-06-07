import logo from './logo.svg';
import './App.css';
import TodoForm from './components/TodoForm';
import { useEffect, useState } from 'react';
import TodoList from './components/TodoList';

const TODO_APP_STORAGE_KEY= 'TODO_APP';
function App() {
  const [input,setInput]=useState("");
  const [todos,setTodos]=useState([]);
  
  useEffect(()=>{
    const storageToDoList = localStorage.getItem(TODO_APP_STORAGE_KEY);
    if(storageToDoList){
      setTodos(JSON.parse(storageToDoList));
    }
  },[]);
  useEffect(()=>{
    if(todos?.length){
      localStorage.setItem(TODO_APP_STORAGE_KEY,JSON.stringify(todos));
    }
    
  },[todos]);

  
  return (
    <div className="App">
      <div>
      <TodoForm
      input={input}
      setInput={setInput}
      todos={todos}
      setTodos={setTodos}
      /></div>
      <div>
        <TodoList todos={todos} setTodos={setTodos}/>
      </div>
    </div>
  );
}

export default App;
