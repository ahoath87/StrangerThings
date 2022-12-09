import { React, useState } from "react";
import "./PostForm.css";
import { createNewPost } from "../api/posts";

//I need for things to be triggered onsbumit = createNewPosts

const PostForm = ({ token, setAllPosts, allPosts }) => {
  const [newTitle, setTitle] = useState("");
  const [newDescription, setDescription] = useState("");
  const [newPrice, setPrice] = useState("");
  const [newLocation, setLocation] = useState("");

  const submitHandler = async (e) => {
    try {
      e.preventDefault();
      const newPost = await createNewPost(
        newTitle,
        newDescription,
        newPrice,
        newLocation
      );
      console.log(newPost);
      setAllPosts([newPost, ...allPosts]);
    } catch (error) {
      console.error(error);
    }
  };
  console.log({ newTitle, newDescription, newPrice, newLocation });
  return (
    <div id="post-form">
      {" "}
      THIS IS POST FORM
      <form onSubmit={submitHandler}>
        <input
          value={newTitle}
          type="text"
          placeholder="Title"
          onChange={(e) => setTitle(e.target.value)}
        ></input>
        <input
          value={newDescription}
          type="text"
          placeholder="Description"
          onChange={(e) => setDescription(e.target.value)}
        ></input>
        <input
          value={newPrice}
          type="text"
          placeholder="Price"
          onChange={(e) => setPrice(e.target.value)}
        ></input>
        <input
          value={newLocation}
          type="text"
          placeholder="Location"
          onChange={(e) => setLocation(e.target.value)}
        ></input>
        <button type="submit">submit</button>
      </form>
    </div>
  );
};

export default PostForm;
