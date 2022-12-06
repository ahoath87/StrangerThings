import React from "react";
import "./UserPosts.css";



const UserPosts = () => {
    return (
        <div className="user-posts">
          <h2>Posts By {currentUser.username}</h2>
          {/* {userPosts.map(({ id, title, description, price, author}) => ( */}
            <div key={id} className="post">
              <h3>{title}</h3>
              <p id="description">{description}</p>
              <p id="price">Price: {price}</p>
              <p id="seller">Seller: {author.username}</p>
              <p id="location">Location: {location} </p>
              <button id="view-button">View</button>

            </div>
          ))}
        </div>
      );
    };

    export default UserPosts;