import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Users.css";

function Users() {
  const [usersList, setUsersList] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/getUsers")
      .then((res) => {
        setUsersList(res.data.result);
      })
      .catch((error) => {
        console.log(error);
      });
  });

  return (
    <div className="users section">
      {usersList.map((user) => {
        return (
          <div className="user-content container">
            <ul className="user-list" key={user._id}>
              <li className="user-name">Name {user.name}</li>
              <li className="user-age">Age {user.age}</li>
              <li className="user-course">Course {user.course}</li>
            </ul>
          </div>
        );
      })}
    </div>
  );
}

export default Users;
