import { useState } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import "./background.css";
import picture from "./seoraksan-mountains-is-covered-by-morning-fog-sunrise-seoul-korea.jpg";
import logo from "./Screenshot_2025-04-01_124037-removebg-preview.png";
export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  return (
    <div
      className="background-cover"
      style={{
        backgroundImage: `url(${picture})`,
        width: "100%",
        height: "100vh",
      }}
    >
      <div className="login-container">
        <h1 className="title-text">LOGIN</h1>
        <img src={logo} className="logo-picture"></img>
        <input
          className="username-placeholder"
          type="text"
          placeholder="Username"
          onChange={function (e) {
            setUsername(e.target.value);
          }}
          value={username}
        ></input>
        <input
          className="password-placeholder"
          type="password"
          placeholder="Password"
          onChange={function (e) {
            setPassword(e.target.value);
          }}
          value={password}
        ></input>
        <p
          onClick={function () {
            if (username === "admin" && password === "admin") {
              navigate("/dashboard");
            } else {
              navigate("/product-list", { state: { username } });
            }
          }}
          className="login-button"
        >
          LOGIN
        </p>
      </div>
    </div>
  );
}
