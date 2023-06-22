import React from "react";
import Logo from "../components/Logo";
import { Link } from "react-router-dom";

const Register = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const email = event.target[0].value;
    const username = event.target[1].value;
    const password = event.target[2].value;
    const passwordConfirmation = event.target[3].value;
    const formObject = { email, username, password, passwordConfirmation };

    // send formObject to api
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
        <h1>Join our tech club</h1>
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
            <label htmlFor="email">Email</label>
            <input id="email" type="text" />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "0.5rem",
              marginTop: "1rem",
            }}
          >
            <label htmlFor="username">Username</label>
            <input id="username" type="text" />
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
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "0.5rem",
              marginTop: "1rem",
            }}
          >
            <label htmlFor="passwordConfirmation">Repeat password</label>
            <input id="passwordConfirmation" type="password" />
          </div>
          <button
            type="submit"
            style={{
              backgroundColor: "#171A21",
              color: "white",
              marginTop: "1rem",
              width: "100%",
            }}
          >
            Register
          </button>
          <Link
            to="/login"
            style={{
              marginTop: "1rem",
              display: "block",
              width: "100%",
              textAlign: "center",
            }}
          >
            Return as existing user
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Register;
