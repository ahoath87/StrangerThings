import { React, useState } from "react";
import { registerUser } from "../api/auth";
import { Link } from "react-router-dom";

//make a request to stranger things API
// had to pass setToken to Register or else it will not pull the new state of token
// when we submit - we want something to happen ...

//if token, do this
// if no token, do this...
const Register = ({ setToken, isRegistered, setIsRegistered, user }) => {
  // hit sumit - run register user which will pull out a token..
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  if (username.length > 5) {
    console.log(`username length is ${username.length}`);
  }
  if (password.length > 5) {
    console.log(`password length is ${password.length}`);
  }
  {
    return (
      <div>
        <form
          onSubmit={async (e) => {
            if (password.length > 5 && username.length > 5) {
              try {
                e.preventDefault();
                //changed the response to token as it was changed form the auth.js
                const token = await registerUser(username, password);
                // setting token into global storage so it can be pulled throughout the app
                setToken(token);
                //get this setToken function and update the state for the refined token
                localStorage.setItem("token", token);
                //go back and make the the local to be the storage
                console.log("this is token in register", token);
                setUsername("");
                setPassword("");
                setIsRegistered(true);
              } catch (error) {
                console.error(error);
              }
            }
          }}
        >
          <h2>Registration</h2>
          {/* <h1>Welcome {user?.username}!</h1> */}
          <input
            id="User"
            value={username}
            type="text"
            placeholder="username"
            onChange={(e) => setUsername(e.target.value)}
          ></input>
          <input
            id="Pass"
            value={password}
            type="password"
            placeholder="password"
            onChange={(e) => setPassword(e.target.value)}
          ></input>
          <button id="submitten" type="submit">
            submit
          </button>
        </form>
      </div>
    );
  }
};

export default Register;
