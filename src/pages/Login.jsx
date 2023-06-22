import React, { useState } from "react";
import Logo from "../components/Logo";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import useLocalStorage from "../hook/useLocalStorage";
import { HOST } from "../api";

const Login = () => {
  const [isLoading, setLoading] = useState(false);
  const [jwt, setJwt] = useLocalStorage("token", "");
  const navigate = useNavigate();
  const handleSucesssNavigation = () => {
    navigate("/my-account");
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const identifier = event.target[0].value;
    const password = event.target[1].value;

    // send formObject to api
    setLoading(true);
    // async function then = Promise:resolved, catch = Promise:reject, finally = Promise:fetched
    axios
      .post(`${HOST}/api/login`, {
        identifier,
        password,
      })
      .then(function (response) {
        console.info(response.data);
        // navigate to my account page when success
        setJwt(response.data.jwt);
        handleSucesssNavigation();
      })
      .catch(function (error) {
        console.log(error.response);
      })
      .finally(function () {
        setLoading(false);
      });
  };
  return (
    <div style={{ height: "100vh", width: "100vw" }}>
      <div
        style={{
          width: "100%",
          height: "80px",
          backgroundColor: "#171A21",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "1rem",
        }}
      >
        <Logo />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          height: "400px",
          alignItems: "center",
          padding: "3rem",
        }}
      >
        <h1>Welcome back</h1>
        <form
          style={{ width: "100%", maxWidth: "400px" }}
          onSubmit={handleSubmit}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "0.5rem",
              marginTop: "3rem",
            }}
          >
            <label htmlFor="identifier">Username / Email</label>
            <input id="identifier" type="text" />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "0.5rem",
              marginTop: "1rem",
            }}
          >
            <label htmlFor="password">Password</label>
            <input id="password" type="password" />
          </div>
          <button
            type="submit"
            style={{
              backgroundColor: "#171A21",
              color: "white",
              marginTop: "1rem",
              width: "100%",
            }}
            disabled={isLoading}
          >
            {isLoading ? "Sending request..." : "Login"}
          </button>
          <Link
            to="/register"
            style={{
              marginTop: "1rem",
              display: "block",
              width: "100%",
              textAlign: "center",
            }}
          >
            Register as new user
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Login;
