import { React, useState, useEffect } from "react";
import "./PostForm.css";
import Posts from "./Posts";
import { updatePost } from "../api/posts";

//I need for things to be triggered onsbumit = createNewPosts

const UpdatePostForm = ({
  token,
  setAllPosts,
  allPosts,
  postToEdit,
  setPostToEdit,
}) => {
  const [updatedTitle, setUpdatedTitle] = useState(postToEdit.title);
  const [updatedDescription, setUpdatedDescription] = useState(
    postToEdit.description
  );
  const [updatedPrice, setUpdatedPrice] = useState(postToEdit.price);
  const [updatedLocation, setUpdatedLocation] = useState(postToEdit.location);
  const [updatedPostId, setUpdatedPostId] = useState(postToEdit._id);

  useEffect(() => {
    setUpdatedTitle(postToEdit.title);
    setUpdatedDescription(postToEdit.description);
    setUpdatedPrice(postToEdit.price);
    setUpdatedPostId(postToEdit._id);
  }, [postToEdit]);

  const submitHandler = async (e) => {
    try {
      e.preventDefault();
      let updatedPost = async () => {
        await updatePost(
          token,
          postToEdit._id,
          updatedTitle,
          updatedDescription,
          updatedPrice,
          updatedLocation
        );
      };
      updatedPost();
    } catch (error) {
      console.error(error);
    }
  };
  //   console.log(title);
  return (
    <div id="post-form">
      Update a post here!
      <form onSubmit={submitHandler}>
        <input
          value={updatedTitle}
          type="text"
          placeholder="Title"
          onChange={(e) => setUpdatedTitle(e.target.value)}
        ></input>
        <input
          value={updatedDescription}
          type="text"
          placeholder="Description"
          onChange={(e) => setUpdatedDescription(e.target.value)}
        ></input>
        <input
          value={updatedPrice}
          type="text"
          placeholder="Price"
          onChange={(e) => setUpdatedPrice(e.target.value)}
        ></input>
        <input
          value={updatedLocation}
          type="text"
          placeholder="Location"
          onChange={(e) => setUpdatedLocation(e.target.value)}
        ></input>
        <button type="submit">submit</button>
      </form>
    </div>
  );
};

export default UpdatePostForm;
