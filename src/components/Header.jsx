import React, { useState } from "react";
import useLocalStorage from "../hook/useLocalStorage";
import { useNavigate } from "react-router-dom";
import Logo from "./Logo";

const Header = () => {
  const navigate = useNavigate();
  const [jwt, setJwt] = useLocalStorage("token", "");
  const [user, setUser] = useLocalStorage("userData", null);
  const handleLogoutOut = () => {
    setJwt("");
    navigate("/");
    location.reload();
  };
  return (
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
      <div style={{ display: "flex", gap: "4px", alignItems: "center" }}>
        <h4 style={{ color: "white" }}>{user?.username || "no data"}</h4>
        <button onClick={handleLogoutOut}>Logout</button>
      </div>
    </div>
  );
};

export default Header;
