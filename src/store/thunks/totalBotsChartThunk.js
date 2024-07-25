import { createAsyncThunk } from "@reduxjs/toolkit";
import { userAPI } from "../../api/ApiPool";

export const fetchtotalBotsChart = createAsyncThunk(
  "totalBotsChart/get",
  async (data) => {
    try {
      const response = await userAPI.totalBotsChart();
      // console.log(response.data)
      return response.data;
    } catch (error) {
      return error;
    }
  }
);
