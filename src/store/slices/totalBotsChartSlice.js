import { createSlice } from "@reduxjs/toolkit";
import { fetchtotalBotsChart } from "../thunks/totalBotsChartThunk";

export const gettotalBotsChartSlice = createSlice({
  name: "totalBotsChart",
  initialState: {
    identifier: null,
    status: "idle",
  },
  reducers: {
    // Define standard reducer logic for proxy groups, if needed
  },
  extraReducers: (builder) => {
    builder.addCase(fetchtotalBotsChart.fulfilled, (state, action) => {
      state.identifier = action.payload;
      state.status = "succeeded";
    });
    builder.addCase(fetchtotalBotsChart.pending, (state) => {
      state.status = "pending";
    });
    builder.addCase(fetchtotalBotsChart.rejected, (state) => {
      state.status = "failed";
    });
  },
});
