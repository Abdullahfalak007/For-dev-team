import { createAsyncThunk } from "@reduxjs/toolkit";
import { userAPI } from "../../api/ApiPool";

export const fetchClients = createAsyncThunk("clients/get", async (data) => {
  try {
    const response = await userAPI.clients();
    // console.log(response.data)
    return response.data;
  } catch (error) {
    return error;
  }
});
