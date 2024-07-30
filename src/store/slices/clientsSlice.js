import { createSlice } from "@reduxjs/toolkit";
import { fetchClients } from "../thunks/clientsThunk";

export const getClientsSlice = createSlice({
  name: "clients",
  initialState: {
    identifier: null,
    status: "idle",
  },
  reducers: {
    // Define standard reducer logic for proxy groups, if needed
  },
  extraReducers: (builder) => {
    builder.addCase(fetchClients.fulfilled, (state, action) => {
      state.identifier = action.payload;
      state.status = "succeeded";
    });
    builder.addCase(fetchClients.pending, (state) => {
      state.status = "pending";
    });
    builder.addCase(fetchClients.rejected, (state) => {
      state.status = "failed";
    });
  },
});
