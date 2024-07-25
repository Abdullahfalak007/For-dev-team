// src/store/reducers.ts

// Import the combineReducers function
import { combineReducers } from "@reduxjs/toolkit";

import { getAuthSlice } from "./slices/AuthSlice";
import { gettotalBotsChartSlice } from "./slices/totalBotsChartSlice";
import { gettotalClientsChartSlice } from "./slices/totalClientsChartSlice";
import { gettotalCallsChartSlice } from "./slices/totalCallsChartSlice";

// Combine all reducers into a single root reducer
const rootReducer = combineReducers({
  auth: getAuthSlice.reducer,
  totalBotsChart: gettotalBotsChartSlice.reducer,
  totalClientsChart: gettotalClientsChartSlice.reducer,
  totalCallsChart: gettotalCallsChartSlice.reducer,
});

// Export the root reducer
export default rootReducer;
