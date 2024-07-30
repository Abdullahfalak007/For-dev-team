// import { createSlice } from "@reduxjs/toolkit";
// import { fetchVirtualAssistants } from "../thunks/virtualAssistantsThunk";

// export const getVirtualAssistantsSlice = createSlice({
//   name: "virtualAssistants",
//   initialState: {
//     data: [],
//     status: "idle",
//   },
//   reducers: {
//     // Define standard reducer logic for proxy groups, if needed
//   },
//   extraReducers: (builder) => {
//     builder.addCase(fetchVirtualAssistants.fulfilled, (state, action) => {
//       state.identifier = action.payload;
//       state.status = "succeeded";
//     });
//     builder.addCase(fetchVirtualAssistants.pending, (state) => {
//       state.status = "pending";
//     });
//     builder.addCase(fetchVirtualAssistants.rejected, (state) => {
//       state.status = "failed";
//     });
//   },
// });

// src/store/slices/virtualAssistantsSlice.js
import { createSlice } from "@reduxjs/toolkit";
import {
  fetchVirtualAssistants,
  addVirtualAssistant,
  updateVirtualAssistant,
  deleteVirtualAssistant,
} from "../thunks/virtualAssistantsThunk";

const virtualAssistantsSlice = createSlice({
  name: "virtualAssistants",
  initialState: {
    identifier: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchVirtualAssistants.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchVirtualAssistants.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.identifier = action.payload;
      })
      .addCase(fetchVirtualAssistants.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(addVirtualAssistant.fulfilled, (state, action) => {
        state.identifier.push(action.payload);
      })
      .addCase(updateVirtualAssistant.fulfilled, (state, action) => {
        const index = state.identifier.findIndex(
          (assistant) => assistant.id === action.payload.id
        );
        if (index !== -1) {
          state.identifier[index] = action.payload;
        }
      })
      .addCase(deleteVirtualAssistant.fulfilled, (state, action) => {
        state.identifier = state.identifier.filter(
          (assistant) => assistant.id !== action.payload
        );
      });
  },
});

export const getVirtualAssistantsSlice = virtualAssistantsSlice;
export default virtualAssistantsSlice.reducer;
