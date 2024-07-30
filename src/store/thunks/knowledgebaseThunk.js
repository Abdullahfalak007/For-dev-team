import { createAsyncThunk } from "@reduxjs/toolkit";
import { userAPI } from "../../api/ApiPool";

export const fetchKnowledgebase = createAsyncThunk(
  "knowledgebase/get",
  async (data) => {
    try {
      const response = await userAPI.knowledgebase();
      // console.log(response.data)
      return response.data;
    } catch (error) {
      return error;
    }
  }
);
