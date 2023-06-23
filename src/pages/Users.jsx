import React, { useEffect } from "react";
import Header from "../components/Header";
import useLocalStorage from "../hook/useLocalStorage";
import { useNavigate, Link } from "react-router-dom";
import { HOST } from "../api";
import axios from "axios";
import { useState } from "react";
import pluralize from "pluralize";

const Users = () => {
  const [user] = useLocalStorage("userData", null);
  const [jwt] = useLocalStorage("token", "");
  const [users, setUsers] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const navigate = useNavigate();
  const fetchUserAccount = () => {
    // get jwt from localStorage
    console.log(jwt);
    setLoading(true);

    // run get api
    axios
      .get(`${HOST}/api/users`, {
        headers: { Authorization: `Bearer ${jwt}` },
      })
      .then(function (response) {
        // handle success
        console.log(response.data.data);
        setUsers(response.data.data);
      })
      .catch(function (error) {
        // handle error
        // console.error(error);
        // console.log(JSON.stringify(error));
        if (error.response.status === 401) {
          navigate("login");
        }
      })
      .finally(function () {
        // always executed
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchUserAccount();
  }, [jwt]);

  return (
    <div style={{ height: "100vh", width: "100vw" }}>
      <Header />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          height: "400px",
          alignItems: "center",
          padding: "3rem",
        }}
      >
        <h1>
          {users.length} registered {pluralize("user", users.length)}
        </h1>
        <div style={{ width: "100%", maxWidth: "400px" }}>
          {isLoading ? (
            <p
              style={{ width: "100%", textAlign: "center", marginTop: "3rem" }}
            >
              Loading users data...
            </p>
          ) : (
            users.map((user, index) => (
              <UserCard key={index} user={user} jwt={jwt} />
            ))
          )}
        </div>
      </div>
    </div>
  );
};

const UserCard = ({ user, jwt }) => {
  // fetch information from api/users/download/id
  const handleClickUser = () => {
    console.log("clicked");
    // run get api
    axios
      .get(`${HOST}/api/users/download/${user.id}`, {
        headers: { Authorization: `Bearer ${jwt}` },
      })
      .then(function (response) {
        // handle success
        console.log(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
        // console.log(JSON.stringify(error));
        // if (error.response.status === 401) {
        //   navigate("login");
        // }
      })
      .finally(function () {
        // always executed
      });
  };
  return (
    <div
      style={{
        borderStyle: "solid",
        borderColor: "gray",
        borderRadius: "0.5rem",
        padding: "1rem",
        marginTop: "1rem",
        position: "relative",
      }}
    >
      <button
        onClick={handleClickUser}
        style={{
          position: "absolute",
          right: "1rem",
          top: "1rem",
          borderStyle: "solid",
          borderColor: "gray",
          borderRadius: "0.2rem",
          padding: "0.2rem",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          cursor: "pointer",
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="0.5"
          stroke="currentColor"
          style={{ height: "1.2rem", width: "1.2rem" }}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m.75 12l3 3m0 0l3-3m-3 3v-6m-1.5-9H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
          />
        </svg>
      </button>
      <div style={{ marginTop: "1rem" }}>
        <p>Username</p>
        <p style={{ display: "inline", fontWeight: "bold" }}>
          {user?.username || "no data"}
        </p>
      </div>
      <div style={{ marginTop: "1rem" }}>
        <p>Email</p>
        <p style={{ display: "inline", fontWeight: "bold" }}>
          {user?.email || "no data"}
        </p>
      </div>
      <div style={{ marginTop: "1rem" }}>
        <p>Admin status</p>
        <p style={{ display: "inline", fontWeight: "bold" }}>
          {user?.created_at || "no data"}
        </p>
      </div>
    </div>
  );
};
export default Users;
