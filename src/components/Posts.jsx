import React from "react";
import "./Posts.css";
// import { createNewPost} from "../api/posts";
// import PostButtons from "./PostButton";
// import postButtons from "./postButtons";

const Posts = ({ allPosts }) => {
  //   const postToCreate ={newTitle, newDescription, newLocation, newPrice};
  // console.log("print out all", allPosts);

  return (
    <div className="user-posts">
      <h2>All Posts</h2>

      {allPosts.length ? (
        allPosts.map(({ _id, title, description, price, author, location }) => (
          <div key={_id} className="post">
            <h3>{title} </h3>
            <p id="description">{description}</p>
            <p id="price">Price: {price}</p>
            <p id="seller">Seller: {author.username}</p>
            <p id="location">Location: {location} </p>
            <button id="view-button">View</button>
          </div>
        ))
      ) : (
        <h2>Loading</h2>
      )}
    </div>
  );
};

export default Posts;

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
