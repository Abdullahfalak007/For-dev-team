import { createSlice } from "@reduxjs/toolkit";
import { fetchChatHistory } from "../thunks/chatHistoryThunk";

export const getChatHistorySlice = createSlice({
  name: "chatHistory",
  initialState: {
    data: [],
    status: "idle",
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchChatHistory.fulfilled, (state, action) => {
        state.data = action.payload;
        state.status = "succeeded";
      })
      .addCase(fetchChatHistory.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchChatHistory.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export default getChatHistorySlice.reducer;
