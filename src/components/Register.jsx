import {React, useState} from "react";
import { registerUser } from "../api/auth";

//make a request to stranger things API
const Register = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    return <div>
        <form onSubmit={async (e) =>{
           try {
            e.preventDefault();
            //changed the response to token as it was changed form the auth.js 
            const token = await registerUser(username, password);
            // setting token into global storage so it can be pulled throughout the app
           localStorage.setItem("token", token);
           } catch (error) {
            console.error(error)
           }
        }}>
            <input value={username} type='text' placeholder="username" onChange={(e)=>setUsername(e.target.value)}></input>
            <input value={password} type='password' placeholder='password' onChange={(e)=>setPassword(e.target.value)}></input>
            <button type="submit">submit</button>
        </form>
    </div>
}


export default Register;