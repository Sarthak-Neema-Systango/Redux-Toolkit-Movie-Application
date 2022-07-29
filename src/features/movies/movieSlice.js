import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import MovieAPI from "../../common/apis/MovieAPI";
import { APIKey } from "../../common/apis/MovieAPIkey";



export const fetchAsyncMovies = createAsyncThunk('movies/fetchAsyncThunk',
    async () => {
        const movieText = "Harry";
        const response = await MovieAPI.get(`?apiKey=${APIKey}&s=${movieText}&type=movie`);
        return response.data;
    });

export const fetchAsyncShows = createAsyncThunk('Movies/fetchAsyncShows ',
    async () => {
        const seriesText = "Crime";
        const response = await MovieAPI.get(
            `?apiKey=${APIKey}&s=${seriesText}&type=series`
        )
        return response.data
    });

export const fetchAsyncDetail = createAsyncThunk('Movies/fetchAsyncDetail ',
    async (id) => {
        const response = await MovieAPI.get(
            `?apiKey=${APIKey}&i=${id}&Plot=full`
        )
        return response.data
    });

    export const fetchAsyncSearch = createAsyncThunk('Search/fetchAsyncThunk',
    async (search) => {
        return search
    });

const initialState = {
    movies: {},
    shows: {},
    selectedItem: {}
}

const movieSlice = createSlice({
    name: "movies",
    initialState,
    reducers: {
        // addMovies: (state, { payload }) => {
        //     state.movies = payload;
        // },
        removeSelectedMovieorShow: (state) => {
            state.selectedItem = {};
        }
    },
    extraReducers: {
        [fetchAsyncMovies.pending]: () => {
            console.log("Pending");
        },
        [fetchAsyncMovies.fulfilled]: (state, { payload }) => {
            console.log("Fetched successfully");
            return { ...state, movies: payload }
        },
        [fetchAsyncMovies.rejected]: () => {
            console.log("Rejected");
        },
        [fetchAsyncShows.fulfilled]: (state, { payload }) => {
            console.log("Fetched successfully");
            return { ...state, shows: payload }
        }, [fetchAsyncDetail.fulfilled]: (state, { payload }) => {
            console.log("Fetched successfully");
            return { ...state, selectedItem: payload }
        },
    }
})

console.log("movieSlice", movieSlice);
// export const { addMovies } = movieSlice.actions;
export const { removeSelectedMovieorShow } = movieSlice.actions;
export const getAllMovies = (state) => state.moviesStore.movies;
export const getAllShows = (state) => state.moviesStore.shows;
export const getSelectedItemDetail = (state) => state.moviesStore.selectedItem;
export default movieSlice.reducer;