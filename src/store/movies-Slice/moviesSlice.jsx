import { createSlice } from '@reduxjs/toolkit';


export const moviesSlice = createSlice({

    name: 'movies',
    initialState: {
        moviesInTheaters:[],
        loading: true,
    },
    reducers: {
        onSetmoviesInTheaters: ( state, { payload } ) => {
            state.moviesInTheaters = payload
            state.loading = false    
       },
    }
});


export const { onSetmoviesInTheaters } = moviesSlice.actions;