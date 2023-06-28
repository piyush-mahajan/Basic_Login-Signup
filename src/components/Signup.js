import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

function Signup() {
  const history = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function submit(e) {
    e.preventDefault();
    try {
      await axios
        .post("http://localhost:5000/signup", {
          email,
          password,
        })
        .then((res) => {
          if (res.data === "exist") {
            alert("user is exist");
          } else if (res.data === "not exist") {
            history("/home", { state: { id: email } });
          }
        })
        .catch((e) => {
          alert("wrong details");
        });
    } catch (err) {
      console.log(err);
    }
  }
  async function piyush(e) {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/piyush").then((res) => {
        if (res.data === "piyush mahajan") {
          console.log("succes");
        }
      });
    } catch (err) {}
  }
  return (
    <div className="login">
      <h1>Signup</h1>

      <form action="POST">
        <input
          type="email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          placeholder="Email"
        />
        <input
          type="password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          placeholder="Password"
        />
        <input type="submit" onClick={submit} />
        <button type="submit" onClick={piyush}>
          piyush
        </button>
      </form>

      <br />
      <p>OR</p>
      <br />

      <Link to="/">Login Page</Link>
    </div>
  );
}

export default Signup;
