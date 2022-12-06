import React from "react";
import "./UserPosts.css";



const Posts = ({ allPosts}) => {
  console.log(allPosts)
    return (
        <div className="user-posts">
          I am in Posts
          {/* <h2>Posts By {currentUser.username}</h2> */}
          {allPosts.length && allPosts.map(({ _id, title, description, price, author, location}) => 
            {
              return (
              <div key={_id} className="post">
              <h3>{title}</h3>
              <p id="description">{description}</p>
              <p id="price">Price: {price}</p>
              <p id="seller">Seller: {author.username}</p>
              <p id="location">Location: {location} </p>
              <button id="view-button">View</button>
            </div>)
            }
          
          )}
        </div>
      );
    };

    export default Posts;