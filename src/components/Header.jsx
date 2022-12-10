import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import LogButton from "./LogButton";

// import { NavLink } from "react-router-dom";

const Header = ({ isLoggedIn }) => {
  //   let activeClassName ="current"
  // console.log("is header logged in", isLoggedIn)
  return (
    <div id="header">
      <header>
        <h1>Strangers Things</h1>
        <div id="links">
          <Link to="/">Home</Link>
          <Link to="/posts">Posts</Link>
          <Link to="/profile">Profile</Link>
          <Link to="/register">Register</Link>
          <Link to="/login">
            {" "}
            <LogButton
              isLoggedIn={isLoggedIn}
              content={isLoggedIn ? "Log Out" : "Log In"}
            />
          </Link>
        </div>
        <div>
          {/* psuedo-code: if isLoggedIn is true then make the button a logout button and 
when clicked delete our token from storage and re-render as a login <button></button> */}
          {/* else if isLoggedIn is false make the button a loging button that redirects to login page */}
        </div>
      </header>
    </div>
  );
};

// <NavLink
//     to="/Home"
//     className={({isActive}) => {
//         return isActive ? activeClassName : undefined;
//     }}
//     >
//       Home
//     </NavLink>

export default Header;
