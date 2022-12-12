import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import LogButton from "./LogButton";
// import { Login } from "./Login";

// import { NavLink } from "react-router-dom";

const Header = ({ isRegistered, isLoggedIn }) => {
  //   let activeClassName ="current"
  // console.log("is header logged in", isLoggedIn)
  return (
    <header>
      <h1>Strangers Things</h1>
      <div id="links">
        <div id="home-link">
          <Link to="/">Home</Link>
        </div>
        <div id="post-link">
          <Link to="/posts">Posts</Link>
        </div>
        <div id="profile-link">
          <Link to="/profile">Profile</Link>
        </div>
        <div id="register-link">
          <Link to="/register">Register</Link>
        </div>
        <button id="login-button-header">
          <Link to="/Login"> Login</Link>
        </button>
        <button
          onClick={async () => {
            isLoggedIn || isRegistered
              ? localStorage.removeItem("token")
              : console.log("not today");
          }}
        >
          Log Out
        </button>
      </div>
      <div>
        {/* psuedo-code: if isLoggedIn is true then make the button a logout button and 
when clicked delete our token from storage and re-render as a login <button></button> */}
        {/* else if isLoggedIn is false make the button a loging button that redirects to login page */}
      </div>
    </header>
  );
};

export default Header;
