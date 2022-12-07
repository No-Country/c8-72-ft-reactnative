import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        
    },
    reducers: {
         increment: (state, /* action */ ) => {
          state.counter += 1;
       },
    }
});


export const { increment } = authSlice.actions;