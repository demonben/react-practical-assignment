import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchPosts } from "./postsAPI";

const initialState = {
  posts: [],
};

export const updateAsync = createAsyncThunk(
  "counter/fetchCount",
  async (page) => {
    const response = await fetchPosts(page);
    return response.data;
  }
);

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    changePosts(state, action){
        state.posts = action.payload
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(updateAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(updateAsync.fulfilled, (state, action) => {
        state.status = "idle";
        console.log("hello world");
      })
      .addCase(updateAsync.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export const { changePosts } = postsSlice.actions;

export default postsSlice.reducer;
