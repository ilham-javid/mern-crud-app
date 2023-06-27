import React from "react";
import "./App.css";
import Users from "./users/Users";
import CreateUser from "./users/CreateUser";

function App() {
  return (
    <main>
      <CreateUser />
      <Users />
    </main>
  );
}

export default App;
