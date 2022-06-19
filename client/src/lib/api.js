import axios from "axios";

export const getPostsByPage = async (pageNumber) => {
  try {
    const response = await axios.get(
      `http://localhost:8080/post/page/${pageNumber}`
    );
    return response.data;
  } catch (error) {
    console.log(error.response);
  }
};
