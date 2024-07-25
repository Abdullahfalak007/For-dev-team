import { createSlice } from "@reduxjs/toolkit";
import { fetchtotalCallsChart } from "../thunks/totalCallsChartThunk";

export const gettotalCallsChartSlice = createSlice({
  name: "totalCallsChart",
  initialState: {
    identifier: null,
    status: "idle",
  },
  reducers: {
    // Define standard reducer logic for proxy groups, if needed
  },
  extraReducers: (builder) => {
    builder.addCase(fetchtotalCallsChart.fulfilled, (state, action) => {
      state.identifier = action.payload;
      state.status = "succeeded";
    });
    builder.addCase(fetchtotalCallsChart.pending, (state) => {
      state.status = "pending";
    });
    builder.addCase(fetchtotalCallsChart.rejected, (state) => {
      state.status = "failed";
    });
  },
});
