import "./App.css";
 import {React, useState} from "react";
import  Posts  from "./components/Posts";
import { useEffect } from "react";
// import {getPostsByUser} from "./api/posts"

const fakePosts = [{
  "location": "[On Request]",
  "willDeliver": false,
  "messages":[],
  "active": true,
  "_id": "638ea173e982fb00176ae0bd",
  "author":{"_id": "638ea172e982fb00176ae0ba", "username": "joe1234"},
  "cohort": "638ea172e982fb00176ae0b9",
  "title": "Practically new Stradivarius",
  "description": "I've really only used this three or four times.  I thought it would be a good purchase, shows what I know.",
  "price": "$14.3 million",
  "createdAt": "2022-12-06T01:57:07.024Z",
  "updatedAt": "2022-12-06T01:57:07.097Z",
  "__v": 0,
  "isAuthor": false
  },
  {
  "location": "[On Request]",
  "willDeliver": true,
  "messages":[],
  "active": true,
  "_id": "638ea173e982fb00176ae0be",
  "author":{"_id": "638ea172e982fb00176ae0bb", "username": "jane1234"},
  "cohort": "638ea172e982fb00176ae0b9",
  "title": "Golden Retriever puppies",
  "description": "Not looking for any money, just want to find a good home for these four beautiful pups.",
  "price": "free",
  "createdAt": "2022-12-06T01:57:07.024Z",
  "updatedAt": "2022-12-06T01:57:07.102Z",
  "__v": 0,
  "isAuthor": false}]


function App() {
  //console.log(fakePosts);
  // const [currentUser, setCurrentUser] = useState({});
  const [allPosts, setAllPosts] = useState([]);

  useEffect (() => {
    setAllPosts(fakePosts)
  },[])
  //console.log(allPosts)
  // useEffect(() => {
  //   if (!currentUser) {
  //     setUserPosts([]);
  //     return;
  //   }

  //   getPostsByUser(currentUser.id)
  //   .then((posts) => {
  //     setUserPosts(posts);
  //   })
  //   .catch((error) => {
  //     // something something errors
  //   });
  // }, [currentUser]);
  
  return (<div className="App">Stranger's Things
  
  <Posts allPosts={allPosts} />
  </div>)
};



export default App;
