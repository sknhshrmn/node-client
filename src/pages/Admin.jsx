import React, { useState } from "react";
import Logo from "../components/Logo";
import { useEffect } from "react";
import useLocalStorage from "../hook/useLocalStorage";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Admin = () => {
  const [isAdmin, setAdmin] = useLocalStorage("isAdmin", false);
  const navigate = useNavigate();
  useEffect(() => {
    if (!isAdmin) {
      navigate("/my-account");
    }
  }, [isAdmin]);

  return (
    <div style={{ height: "100vh", width: "100vw" }}>
      <h1>Admin page</h1>
    </div>
  );
};

export default Admin;
