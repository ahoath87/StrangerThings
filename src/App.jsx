import "./App.css";
 import {React, useState, useEffect} from "react";
import  Posts  from "./components/Posts";
 import {getAllPosts} from "./api/posts"
 import Register from "./components/Register";
 import { fetchMe } from "./api/auth";



function App() {
  const [allPosts, setAllPosts] = useState([]);
  const [token, setToken] = useState(localStorage.getItem("token"))
 //created state to grab token
//retrieving API data from getAllPosts and setting state 
  useEffect(() => {
    getAllPosts()
    .then((posts) => {
      setAllPosts(posts);
    })
    .catch((error) => {
    });
  }, []);
  
  //console.log(allPosts)
  //if I want data to render for the veery first time I want a useEffect
  //then when you get that data you are going to set it to State
  //books on a shelf and someone takes a book and you write that books name on a list
  // takes the list which is the dependency array and verify is again your list of missing books
  //it could also be anything you want but it must be related to the dependency array

  useEffect(() =>{
const getMe = async () => {
  const data = await fetchMe(token)
  console.log(data);
};
getMe()
  }, []);
  
  return (
    <div className="App">Stranger's Things
  
  <Posts allPosts={allPosts} />
  <Register />
  </div>)
};



export default App;
