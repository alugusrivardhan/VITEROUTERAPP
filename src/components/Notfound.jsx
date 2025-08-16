import React from "react";
import { useNavigate } from "react-router-dom";

const Notfound = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h2>404 | Not Found</h2>
      <br />
      <button onClick={() => navigate("/")}>Homepage</button>
    </div>
  );
};

export default Notfound;
