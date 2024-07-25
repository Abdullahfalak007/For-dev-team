import { createAsyncThunk } from "@reduxjs/toolkit";
import { userAPI } from "../../api/ApiPool";

export const fetchtotalCallsChart = createAsyncThunk(
  "totalCallsChart/get",
  async (data) => {
    try {
      const response = await userAPI.totalCallsChart();
      // console.log(response.data)
      return response.data;
    } catch (error) {
      return error;
    }
  }
);
