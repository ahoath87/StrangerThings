import {React, useState} from "react";
import { loginUser } from "../api/auth";
// import { storeCurrentUser } from "../auth";
import "./Login.css";


const Login = ({setToken, setIsLoggedIn, isLoggedIn}) => {
    console.log("looog", isLoggedIn )
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    return <div>
         <form onSubmit={async (e) =>{
           try {
            e.preventDefault();
            console.log(username, password)
            const token = await loginUser(username, password);
            setToken(token);
            localStorage.setItem("token in Login", token)
            console.log("this is it in local storage", isLoggedIn )
           //console.log("this is token in login", token)
            //console.log("this is userr in login", )
            //psuedocode if token is in local storage setIsLoggedIn to true, then setIsLoggedIn to isLoggedIn 
            !token ? setIsLoggedIn(false) : setIsLoggedIn(true)
            console.log("show me islogged in", isLoggedIn)

           } catch (error) {
            console.error(error)
           }
        }}>
            <h2>I am Login Below</h2>
            <input value={username} minLength={5} type='text' placeholder="username" onChange={(e)=>setUsername(e.target.value)}></input>
            <input value={password} minLength={5} type='password' placeholder='password' onChange={(e)=>setPassword(e.target.value)}></input>
            <button type="login">login</button>
        </form>
    </div>
}

export default Login;