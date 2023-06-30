import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import "./components/Read/TodoList.css";

const App = () => {
  const [todos, setTodos] = useState([]);
  const [newTodoText, setNewTodoText] = useState("");

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    try {
      const response = await axios.get("http://localhost:8080/todos");
      setTodos(response.data.result);
    } catch (error) {
      console.error("Error fetching todos:", error);
    }
  };

  const handleAddTodo = async () => {
    if (!newTodoText.trim()) return;
    try {
      const response = await axios.post("http://localhost:8080/todo/new", {
        text: newTodoText,
      });
      fetchTodos();
      setNewTodoText("");
    } catch (error) {
      console.error("Error adding todo:", error);
    }
  };

  const handleToggleCompleted = async (id) => {
    try {
      const updatedTodo = await axios.put(
        `http://localhost:8080/todo/complete/${id}`
      );
      fetchTodos();
    } catch (error) {
      console.error("Error toggling todo completion:", error);
    }
  };

  const handleDeleteTodo = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/todo/delete/${id}`);
      fetchTodos();
    } catch (error) {
      console.error("Error deleting todo:", error);
    }
  };

  return (
    <div className="App">
      <h1 className="todo-title">MERN Todo App</h1>
      <h4 className="todo-subtitle">Your Tasks</h4>
      <div className="todo-input">
        <input
          type="text"
          value={newTodoText}
          onChange={(e) => setNewTodoText(e.target.value)}
          className="todo-input-box"
        />
        <button className="btn" onClick={handleAddTodo}>
          Add Todo
        </button>
      </div>
      <ul>
        {todos.map((todo) => (
          <li key={todo._id} className="todo">
            <span
              style={{
                textDecoration: todo.complete ? "line-through" : "none",
                cursor: "pointer",
              }}
              onClick={() => handleToggleCompleted(todo._id)}
            >
              {todo.text}
            </span>
            <button
              className="btn delete-todo "
              onClick={() => handleDeleteTodo(todo._id)}
            >
              x
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
