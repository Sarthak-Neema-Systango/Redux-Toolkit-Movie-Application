import { createSlice } from "@reduxjs/toolkit";

const initalState = {
    movies: []
}

const movieSlice = createSlice({
    name: "movies",
    initialState:{initalState},
    reducers:{
        addMovies: (state, {payload}) => {
            state.movies = payload;
        }
    },
    extraReducers:{}
})