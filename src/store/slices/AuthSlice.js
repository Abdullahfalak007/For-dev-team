import {createSlice} from "@reduxjs/toolkit";
import {fetchTesting} from "../thunks/AuthThunk";

export const getAuthSlice = createSlice({
    name: 'testing',
    initialState: {
        identifier: null,
        status: 'idle',
    },
    reducers: {
        // Define standard reducer logic for proxy groups, if needed
    },
    extraReducers: (builder) => {
        builder.addCase(fetchTesting.fulfilled, (state, action) => {
            state.identifier = action.payload;
            state.status = 'succeeded';
        });
        builder.addCase(fetchTesting.pending, (state) => {
            state.status = 'pending';
        });
        builder.addCase(fetchTesting.rejected, (state) => {
            state.status = 'failed';
        });
    }
});
