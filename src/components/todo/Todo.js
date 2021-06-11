import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { Filter } from "./Filter";
import { Item } from "./Item";

export const Todo = () => {
  const [input, setInput] = useState("");
  const [todo, setTodos] = useState([]);
  const [display, setDisplay] = useState([]);
  console.log(todo);
  useEffect(() => {
    setTodos(JSON.parse(localStorage.getItem("localStorageTodos")) || []);
    setDisplay(JSON.parse(localStorage.getItem("localStorageTodos")) || []);
  }, []);
  const setLocalStorage = (data) => {
    setTodos(data);
    setDisplay(data);
    localStorage.setItem("localStorageTodos", JSON.stringify(data));
  };
  const addTodo = (e) => {
    e.preventDefault();
    if (input.trim().length < 3) {
      alert("please enter word with more then 3 letters");
    } else {
      const newTodos = { id: uuidv4(), title: input, completed: false };
      const data = [...todo, newTodos];
      setInput("");
      setLocalStorage(data);
      console.log(data);
    }
  };
  const removeTodo = (id) => {
    const data = todo.filter((todo) => todo.id !== id);
    setLocalStorage(data);
  };
  const markComp = (id) => {
    const data = todo.map((item) => {
      if (item.id === id) {
        return { ...item, completed: !item.completed };
      }
      return item;
    });
    setLocalStorage(data);
  };
  const all = () => {
    setDisplay(todo);
  };
  const done = () => {
    setDisplay(todo.filter((todo) => todo.completed === true));
  };
  const active = () => {
    setDisplay(todo.filter((todo) => todo.completed === false));
  };
  return (
    <div className='todo' id='todo'>
      <h1>Todo List</h1>
      <p>Plan ahead</p>
      <form className='todo-form' onSubmit={addTodo}>
        <input
          type='text'
          className='todo-input'
          placeholder='Add task'
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type='submit' className='todo-button'>
          Add
        </button>
      </form>
      <Filter all={all} active={active} done={done} />
      <div>
        {display.map((todo) => (
          <Item
            key={todo.id}
            id={todo.id}
            todos={todo.title}
            completed={todo.completed}
            removeTodo={removeTodo}
            markComp={markComp}
          />
        ))}
      </div>
    </div>
  );
};
