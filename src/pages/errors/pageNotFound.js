import React from "react";
import { useHistory } from "react-router";

const PageNotFound = () => {
  const history = useHistory();
  return (
    <div>
      <h1>404 not found</h1>
      <button onClick={() => history.push("/")}>Click me</button>
    </div>
  );
};

export default PageNotFound;
