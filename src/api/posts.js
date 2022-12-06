import axios from "axios";

const BASE = "https://strangers-things.herokuapp.com/api/2211-FTB-ET-WEB-FT";

export async function getAllPosts() {
  try {
    const { data } = await axios.get(`${BASE}/posts`);
    return data;
  } catch (error) {
    throw error;
  }
}
