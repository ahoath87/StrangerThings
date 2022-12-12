import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <div id="home">
      Welcome to StrangersThings!
      <div id="home-buttons">
        <button>
          <Link to="/register">Register Here</Link>
        </button>
        <button>
          <Link to="/login">Login Here!</Link>
        </button>{" "}
      </div>
    </div>
  );
};

export default Home;

// return (
//   <div id="home"
// <h1>Welcome To StrangerThings!!!</h1>
// <div>

//   <Link to="/login">Login Here!</Link>
//   <Link to="/register">Register Here</Link>
// </div>
// </div>)
