import { configureStore } from "@reduxjs/toolkit";
import { moviesSlice } from "./movies-Slice/moviesSlice";

configureStore

export const store = configureStore({
    reducer: {
        movies: moviesSlice.reducer
    }
})



export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch