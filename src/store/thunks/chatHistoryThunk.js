import { createAsyncThunk } from "@reduxjs/toolkit";
import { userAPI } from "../../api/ApiPool";

export const fetchChatHistory = createAsyncThunk(
  "chatHistory/get",
  async (data) => {
    try {
      const response = await userAPI.chatHistory();
      // console.log(response.data)
      return response.data;
    } catch (error) {
      return error;
    }
  }
);
