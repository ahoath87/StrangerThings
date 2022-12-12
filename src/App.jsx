import "./App.css";
import { React, useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Posts from "./components/Posts";
import { getAllPosts } from "./api/posts";
import Register from "./components/Register";
import { fetchMe, loginUser } from "./api/auth";
import Login from "./components/Login";
import Header from "./components/Header";
// import PostForm from "./components/PostForm";
import Profile from "./components/Profile";
import Home from "./components/Home";
import UpdatePostForm from "./components/UpdatePostForm";
import PostForm from "./components/PostForm";
import MessageForm from "./components/MessageForm";
//  import LogOutButton from "."
//  import LogOut from "./components/LogOut";

function App() {
  const [allPosts, setAllPosts] = useState([]);
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [user, setUser] = useState({});
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [postToEdit, setPostToEdit] = useState({});
  const [isRegistered, setIsRegistered] = useState(false);
  //created state to grab token
  //retrieving API data from getAllPosts and setting state
  useEffect(() => {
    getAllPosts()
      .then((posts) => {
        setAllPosts(posts);
      })
      .catch((error) => {});
  }, []);

  //console.log(allPosts)
  //if I want data to render for the veery first time I want a useEffect
  //then when you get that data you are going to set it to State
  //books on a shelf and someone takes a book and you write that books name on a list
  // takes the list which is the dependency array and verify is again your list of missing books
  //it could also be anything you want but it must be related to the dependency array

  useEffect(() => {
    const getMe = async () => {
      const data = await fetchMe(token);
      setUser(data);

      console.log("this is user", token);
    };
    if (token) {
      getMe();
    }
  }, [token]);

  console.log("in app isloggedin", isLoggedIn);

  return (
    <div className="App">
      <Header isLoggedIn={isLoggedIn} isRegistered={isRegistered} />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route
          path="/register"
          element={
            <Register
              setIsRegistered={setIsRegistered}
              isRegistered={isRegistered}
              user={user}
              setToken={setToken}
            />
          }
        ></Route>
        <Route
          path="/profile"
          element={
            <Profile
              token={token}
              postToEdit={setPostToEdit}
              setAllPosts={setAllPosts}
              allPosts={allPosts}
              setPostToEdit={setPostToEdit}
              user={user}
              setUser={setUser}
            />
          }
        ></Route>
        <Route
          path="/login"
          element={
            <Login
              user={user}
              setIsRegistered={setIsRegistered}
              isRegistered={isRegistered}
              setToken={setToken}
              // token={token}
              setUser={setUser}
              setIsLoggedIn={setIsLoggedIn}
              isLoggedIn={isLoggedIn}
            />
          }
        ></Route>
        <Route
          path="/posts"
          element={
            <Posts
              token={token}
              allPosts={allPosts}
              setAllPosts={setAllPosts}
              getAllPosts={getAllPosts}
              setPostToEdit={setPostToEdit}
              postToEdit={postToEdit}
            />
          }
        ></Route>
        <Route
          path="/postForm"
          element={
            <PostForm
              setAllPosts={setAllPosts}
              token={token}
              allPosts={allPosts}
              getAllPosts={getAllPosts}
            />
          }
        ></Route>
        <Route path="/messageForm" element={<MessageForm />}></Route>

        <Route
          path="/updatePostForm"
          element={
            <UpdatePostForm
              token={token}
              setAllPosts={setAllPosts}
              allPosts={allPosts}
              postToEdit={postToEdit}
              setPostToEdit={setPostToEdit}
            />
          }
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
