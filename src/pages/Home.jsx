import React from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../components/Logo";

const Home = () => {
  const navigate = useNavigate();
  const handleNavigate = (path) => {
    navigate(path);
  };
  return (
    <div style={{ height: "100vh", width: "100vw" }}>
      <div
        style={{
          width: "100%",
          height: "80px",
          backgroundColor: "#171A21",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "1rem",
        }}
      >
        <Logo />
        <div style={{ display: "flex", gap: "4px" }}>
          <button onClick={() => handleNavigate("login")}>Login</button>
          <button onClick={() => handleNavigate("register")}>New user?</button>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          height: "400px",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1>Welcome to my web app</h1>
      </div>
    </div>
  );
};

export default Home;
