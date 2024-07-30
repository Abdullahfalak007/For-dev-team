import { createSlice } from "@reduxjs/toolkit";
import { fetchVirtualAssistants } from "../thunks/virtualAssistantsThunk";

export const getVirtualAssistantsSlice = createSlice({
  name: "virtualAssistants",
  initialState: {
    data: [],
    status: "idle",
  },
  reducers: {
    // Define standard reducer logic for proxy groups, if needed
  },
  extraReducers: (builder) => {
    builder.addCase(fetchVirtualAssistants.fulfilled, (state, action) => {
      state.identifier = action.payload;
      state.status = "succeeded";
    });
    builder.addCase(fetchVirtualAssistants.pending, (state) => {
      state.status = "pending";
    });
    builder.addCase(fetchVirtualAssistants.rejected, (state) => {
      state.status = "failed";
    });
  },
});
