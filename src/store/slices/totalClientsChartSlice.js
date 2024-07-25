import { createSlice } from "@reduxjs/toolkit";
import { fetchtotalClientsChart } from "../thunks/totalClientsChartThunk";

export const gettotalClientsChartSlice = createSlice({
  name: "totalClientsChart",
  initialState: {
    identifier: null,
    status: "idle",
  },
  reducers: {
    // Define standard reducer logic for proxy groups, if needed
  },
  extraReducers: (builder) => {
    builder.addCase(fetchtotalClientsChart.fulfilled, (state, action) => {
      state.identifier = action.payload;
      state.status = "succeeded";
    });
    builder.addCase(fetchtotalClientsChart.pending, (state) => {
      state.status = "pending";
    });
    builder.addCase(fetchtotalClientsChart.rejected, (state) => {
      state.status = "failed";
    });
  },
});
