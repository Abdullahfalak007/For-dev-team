import { createAsyncThunk } from "@reduxjs/toolkit";
import { userAPI } from "../../api/ApiPool";

export const fetchtotalClientsChart = createAsyncThunk(
  "totalClientsChart/get",
  async (data) => {
    try {
      const response = await userAPI.totalClientsChart();
      // console.log(response.data)
      return response.data;
    } catch (error) {
      return error;
    }
  }
);
