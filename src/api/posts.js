import axios from "axios";
import { BASE_URL } from "../components/BASE_URL";

export async function getAllPosts() {
  //object pulling an object pulling an object from API to get to posts
  try {
    const {
      data: {
        data: { posts },
      },
    } = await axios.get(`${BASE_URL}/posts`);
    //console.log(posts);
    return posts;
  } catch (error) {
    console.error(error);
  }
}

export const createNewPost = async (
  // token,
  title,
  description,
  location,
  price
) => {
  // console.log({ title, description, location, price });
  const token = localStorage.token;
  // console.log("thisi is token", token);
  try {
    const response = await fetch(`${BASE_URL}/posts`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        post: {
          title: title,
          description: description,
          price: price,
          location: location,
        },
      }),
    });

    // const result = await response.json();
    // console.log(result);
    const {
      data: { post },
    } = await response.json();
    console.log("this is posts in create", post);
    return post;
  } catch (error) {
    throw error;
  }
};

export const updatePost = async (
  token,
  post_id,
  title,
  description,
  location,
  price
) => {
  // const token = localStorage.token;
  try {
    const response = await fetch(`${BASE_URL}/posts/${post_id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        post: {
          title,
          description,
          price,
          location,
        },
      }),
    });
    const data = await response.json();
    console.log(data);
    console.log(token);
    // return post;
  } catch (error) {
    throw error;
  }
};

export const deletePost = async (post_id) => {
  const token = localStorage.token;
  try {
    const response = await fetch(`${BASE_URL}/posts/${post_id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    console.log(post_id);
    return "post deleted";
  } catch (error) {
    console.error(error);
  }
};
