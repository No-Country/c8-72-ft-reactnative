import { configureStore } from "@reduxjs/toolkit";
import { authSlice,  } from "./auth/authSlice";
import { moviesSlice } from "./movies/moviesSlice";

configureStore

export const store = configureStore({
    reducer: {
        auth: authSlice.reducer,
        movies: moviesSlice.reducer
    }
})
