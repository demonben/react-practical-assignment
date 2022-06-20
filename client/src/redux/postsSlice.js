import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getPostsByPage } from "../lib/api";

const initialState = {
  posts: [],
  currentPage: 1,
  status: "idle",
};

export const updateAsync = createAsyncThunk(
  "counter/fetchCount",
  async (page) => {
    const response = await getPostsByPage(page);
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
    nextPage(state, action) {
      state.currentPage = action.payload;
    },
    previousPage(state, action) {
      state.currentPage = action.payload;
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

export const { changePosts, nextPage, previousPage } = postsSlice.actions;

export default postsSlice.reducer;
