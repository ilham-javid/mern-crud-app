import React from "react";
import CreateUser from "../components/CreateUser";
import Users from "../components/Users";

function Content() {
  return (
    <div className="container">
      <CreateUser />
      <Users />
    </div>
  );
}

export default Content;
