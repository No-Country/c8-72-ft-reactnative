import { createSlice } from '@reduxjs/toolkit';

export const moviesSlice = createSlice({
    name: 'movies',
    initialState: {
        moviesInTheaters:[],
        loading: true,
        idMovie: {},
        infoVideos:[],
        movieDetails:{},
        cast:[],
        similarMovie: [],
        search:[]
    },
    reducers: {
        onSetMoviesInTheaters: ( state, { payload } ) => {
            state.moviesInTheaters = payload
            state.loading = false 
        },
        onSetMovieId: ( state, { payload }) => {
            state.idMovie = payload
        },
        onSetInfoVideos: ( state, { payload }) => {
            state.infoVideos = payload  
            state.loading = false  
            
        },
        onSetMovieDetails: ( state, { payload }) => {
            state.movieDetails = payload
        },
        onSetCast: ( state, { payload }) => {
            state.cast = payload
        },
        onSetSimilarMovie: ( state, { payload }) => {
            state.similarMovie = payload
        },
        onReset: ( state ) => {
            state.idMovie={},
            state.infoVideos=[],
            state.movieDetails={},
            state.cast=[],
            state.similarMovie=[],
            state.search=[]
        },
        onSetSearch:( state, { payload }) => {
            state.search = payload
        },
    }
});

export const { 
    onSetMoviesInTheaters, 
    onSetMovieId, 
    onSetInfoVideos, 
    onSetMovieDetails,
    onSetCast,
    onSetSimilarMovie,
    onReset,
    onSetSearch,
} = moviesSlice.actions;