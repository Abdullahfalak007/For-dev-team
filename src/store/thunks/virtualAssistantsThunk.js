import { createAsyncThunk } from "@reduxjs/toolkit";
import { userAPI } from "../../api/ApiPool";

export const fetchVirtualAssistants = createAsyncThunk(
  "virtualAssistants/get",
  async (data) => {
    try {
      const response = await userAPI.virtualAssistants();
      // console.log(response.data)
      return response.data;
    } catch (error) {
      return error;
    }
  }
);
