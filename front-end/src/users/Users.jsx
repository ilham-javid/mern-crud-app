import React, { useState, useEffect } from "react";
import axios from "axios";

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
      <div className="user-content container">
        {usersList.map((user) => {
          return (
            <ul className="user-list-" key={user._id}>
              <li className="user-name">{user.name}</li>
              <li className="user-age">{user.age}</li>
              <li className="user-course">{user.course}</li>
            </ul>
          );
        })}
      </div>
    </div>
  );
}

export default Users;
