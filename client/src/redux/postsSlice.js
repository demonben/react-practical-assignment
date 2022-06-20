import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getPostsByPage } from "../lib/api";
import { fetchPosts } from "./postsAPI";

const initialState = {
  posts: [],
  status: "idle",
};

export const updateAsync = createAsyncThunk(
  "counter/fetchCount",
  async (page) => {
    const response = await getPostsByPage(1);
    return response.result;
  }
);

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    changePosts(state, action) {
      state.posts = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(updateAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(updateAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.posts = action.payload;
      })
      .addCase(updateAsync.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export const { changePosts } = postsSlice.actions;

export default postsSlice.reducer;
