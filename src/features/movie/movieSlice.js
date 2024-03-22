import { createSlice } from "@reduxjs/toolkit";

let initialState = {
  recommend: null,
  newDisney: null,
  original: null,
  trending: null,
};

const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    setMovies: (state, action) => {
      state.recommend = action.payload.recommend;
      state.trending = action.payload.trending;
      state.newDisney = action.payload.newDisney;
      state.original = action.payload.original;
    },
  },
});
export const { setMovies } = movieSlice.actions;
export const selectRecommend = (state) => state.movie.recommend;
export const selectTrending = (state) => state.movie.trending;
export const selectOriginal = (state) => state.movie.original;
export const selectNewDisney = (state) => state.movie.newDisney;

export default movieSlice.reducer;
