import { React, useState } from "react";
import PostForm from "./PostForm";
import "./Posts.css";
import { Link } from "react-router-dom";
import { updatePost } from "../api/posts";
import UpdatePostForm from "./UpdatePostForm";
// import { createNewPost} from "../api/posts";
// import PostButtons from "./PostButton";
// import postButtons from "./postButtons";

const Posts = ({
  allPosts,
  postToEdit,
  setPostToEdit,
  setAllPosts,
  token,
  getAllPosts,
}) => {
  // const [postToEdit, setPostToEdit] = useState({});

  //console.log("print out all", allPosts);

  return (
    <div className="user-posts-inpost">
      <h2>All Posts</h2>
      <div id="create-button">
        <button>
          <Link to="/postForm">Create New Post</Link>
        </button>
      </div>

      {allPosts.length ? (
        allPosts.map((post) => (
          <div key={post._id} className="post-inpost">
            <h3>{post.title} </h3>
            <p id="description">Description: {post.description}</p>
            <p id="price">Price: {post.price}</p>
            <p id="seller">Seller: {post.author.username}</p>
            <p id="location">Location: {post.location} </p>

            <button>
              <Link to="/messageForm"> Send User a Message</Link>
            </button>
          </div>
        ))
      ) : (
        <h2>Loading</h2>
      )}
    </div>
  );
};

export default Posts;

// _id, title, description, price, author, location;

// // <div className="user-posts">All Posts
// //       {allPosts.length && allPosts.map(({ _id, title, description, price, author, location}) =>
//         {
//           return (
//           <div key={_id} className="post">
//           <h3>{title} </h3>
//           <p id="description">{description}</p>
//           <p id="price">Price: {price}</p>
//           <p id="seller">Seller: {author.username}</p>
//           <p id="location">Location: {location} </p>
//           <button id="view-button">View</button>
//         </div>)
//         }

//       )}
//     </div>
