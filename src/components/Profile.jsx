import { React, useState } from "react";
import "./Profile.css";
import { Link } from "react-router-dom";
import { deletePost } from "../api/posts";

const Profile = ({
  postToEdit,
  setPostToEdit,
  user,
  setAllPosts,
  allPosts,
  post_id,
  token,
  setUser,
}) => {
  // const [userPostings, setUserPostings] = useState([]);

  const userPosts = user.posts;
  console.log(user.posts);
  const userMessages = user.messages;
  console.log(user.messages);

  return (
    <div id="my-data">
      <div className="userMessages">
        {" "}
        <h2>My Messages</h2>
        {userMessages.map((userMessage) => {
          return (
            <div className="userMessage" key={userMessage._id}>
              <div>From: {userMessage.fromUser.username}</div>
              <div> Post Title: {userMessage.post.title}</div>
              <div>Content: {userMessage.content}</div>
            </div>
          );
        })}
      </div>
      <div className="userPosts">
        <h2> My Posts</h2>
        {userPosts.map((post) => {
          return (
            <div className="userPost" key={post._id}>
              <div id="title.profile.post">Title: {post.title}</div>
              <div>Description: {post.description}</div>
              <div>Price: {post.price}</div>
              <div>Location: {post.location}</div>
              <button
                onClick={() => {
                  setPostToEdit(post);
                  // setPostToEdit(postToEdit);
                  console.log(postToEdit);
                }}
              >
                <Link id="link-to-update" to="/updatePostForm">
                  Update Your Post
                </Link>
              </button>
              <button
                onClick={async () => {
                  const deletedPost = await deletePost(post_id, token);
                  setAllPosts([
                    ...allPosts.filter((post) => post._id !== post_id),
                  ]);
                  console.log(deletedPost);
                }}
              >
                Delete Post
              </button>
            </div>
          );
        })}
      </div>
      ;
    </div>
  );

  // );
};

export default Profile;
