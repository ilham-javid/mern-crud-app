import React, { useState, useEffect } from "react";
import "./TodoList.css";
import axios from "axios";

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [active, setActive] = useState(false);
  const [newTodo, setNewTodo] = useState("");

  const API_BASE = "http://localhost:8080";

  useEffect(() => {
    fetchTodo();
  }, []);

  const fetchTodo = async () => {
    try {
      const res = await axios.get(`${API_BASE}/todos`);
      setTodos(res.data.result);
    } catch (error) {
      console.log("Fetch todo error", error);
    }
  };

  const completeTodo = async (id) => {
    try {
      await axios.put(`${API_BASE}/todo/complete/${id}`).then((res) => {
        console.log(res);
      });

      fetchTodo();
      // window.location.reload();
    } catch (error) {
      console.log("complete todo error", error);
    }
  };

  const deleteTodo = async (id) => {
    try {
      await axios.delete(`${API_BASE}/todo/delete/${id}`);
      setTodos(todos.filter((todo) => todo._id !== id));
      window.location.reload();
    } catch (error) {
      console.log("de todo error", error);
    }
  };

  return (
    <div className="todo-list">
      <h1 className="todo-title">Weolocme Javid</h1>
      <h4 className="todo-subtitle">Your Tasks</h4>

      <div className="todos">
        {todos.map((todo) => {
          return (
            <div
              className={"todo " + (todo.complete ? "is-complete" : "")}
              key={todo._id}
              onClick={() => completeTodo(todo._id)}
            >
              <div className="checkbox"></div>
              <div className="text">{todo.text}</div>

              <div className="delete-todo" onClick={() => deleteTodo(todo._id)}>
                x
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default TodoList;
