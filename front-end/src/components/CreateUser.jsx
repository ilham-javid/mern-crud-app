import axios from "axios";
import React, { useState } from "react";

function CreateUser() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [course, setCourse] = useState("");

  const handleSubmit = () => {
    axios.post("http://localhost:8080/createUser", {
      name: name,
      age: age,
      course: course,
    });
  };

  return (
    <div className="user-input">
      <form onSubmit={handleSubmit} className="user-input-form">
        <div className="user-name">
          <label htmlFor="name">Name : </label>
          <input
            type="text"
            placeholder="name..."
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>

        <div className="user-age">
          <label htmlFor="age">Age : </label>
          <input
            type="number"
            placeholder="age..."
            value={age}
            onChange={(e) => {
              setAge(e.target.value);
            }}
          />
        </div>

        <div className="user-course">
          <label htmlFor="course">Course : </label>
          <input
            type="text"
            placeholder="course..."
            value={course}
            onChange={(e) => {
              setCourse(e.target.value);
            }}
          />
        </div>

        <button type="submit">Create User</button>
      </form>
    </div>
  );
}

export default CreateUser;
