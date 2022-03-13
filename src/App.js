import React, { useState, useEffect } from 'react';
import './App.css';
// =========import component=========
import Form from './component/Form';
import ToDolist from './component/ToDolist';
function App() {
useEffect(() => {
  getlocaltodos();
},[]
)
  // =========steatus=========
  const [inputText, setinputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [statous, setStatous] = useState("all");
  const [Filteredtodos, setFilteredtodos] = useState([]);

  // =========Funcotion=========
  const FilterHandel = () => {
    switch (statous) {
      case "completed":
        setFilteredtodos(todos.filter(todo => todo.completed === true));
        break;
      case "uncompleted":
        setFilteredtodos(todos.filter(todo => todo.completed === false));
        break;
      default: setFilteredtodos(todos);
        break;
    }
  }
  // =========effect=========
  useEffect(() => {
    FilterHandel();
    savelocaltods();
  }, [todos, statous]
  );
// ========= save storeg =========
  const savelocaltods = () => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }
  const getlocaltodos = () => {
    if (localStorage.getItem('todos') === null) {
      localStorage.setItem('todos', JSON.stringify([]));
    } else {
      let todolocal = JSON.parse(localStorage.getItem('todos'));
      setTodos(todolocal);
    }
  }
  return (
    <div className="App">
      <header>
        <h1> Todo List </h1>
      </header>
      <Form
        setinputText={setinputText}
        inputText={inputText}
        setTodos={setTodos}
        todos={todos}
        setStatous={setStatous}
      />
      <ToDolist
        setTodos={setTodos}
        todos={todos}
        Filteredtodos={Filteredtodos}
      />
    </div>
  );
}
export default App;
