import axios from "axios";

const BASE = "https://strangers-things.herokuapp.com/api/2211-FTB-ET-WEB-FT";

export async function getAllPosts() {
  //object pulling an object pulling an object from API to get to posts
  try {
    const {
      data: {
        data: { posts },
      },
    } = await axios.get(`${BASE}/posts`);
    //console.log(posts);
    return posts;
  } catch (error) {
    throw error;
  }
}
