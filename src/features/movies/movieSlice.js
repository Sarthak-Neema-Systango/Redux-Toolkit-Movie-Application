import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    movies: {},
}

const movieSlice = createSlice({
    name: "movies",
    initialState,
    reducers: {
        addMovies: (state, {payload}) => {
            state.movies = payload;
        }
    },
})

console.log("movieSlice",movieSlice);
export const {addMovies} = movieSlice.actions;
export const getAllMovies = (state) => state.moviesStore.movies
export default movieSlice.reducer;