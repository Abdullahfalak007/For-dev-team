// import { createSlice } from "@reduxjs/toolkit";
// import { fetchChatHistory } from "../thunks/chatHistoryThunk";

// export const getChatHistorySlice = createSlice({
//   name: "chatHistory",
//   initialState: {
//     data: [],
//     status: "idle",
//   },
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchChatHistory.fulfilled, (state, action) => {
//         state.data = action.payload;
//         state.status = "succeeded";
//       })
//       .addCase(fetchChatHistory.pending, (state) => {
//         state.status = "loading";
//       })
//       .addCase(fetchChatHistory.rejected, (state) => {
//         state.status = "failed";
//       });
//   },
// });

// export default getChatHistorySlice.reducer;

import { createSlice } from "@reduxjs/toolkit";
import {
  fetchChatHistory,
  updateSelectedText,
  addInputMessage,
} from "../thunks/chatHistoryThunk";

const chatHistorySlice = createSlice({
  name: "chatHistory",
  initialState: {
    currentFile: null,
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchChatHistory.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchChatHistory.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.currentFile = action.payload;
      })
      .addCase(fetchChatHistory.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(updateSelectedText.fulfilled, (state, action) => {
        if (state.currentFile) {
          state.currentFile.selectedText = action.payload.selectedText;
          state.currentFile.selectedTextId = action.payload.selectedTextId;
        }
      })
      .addCase(addInputMessage.fulfilled, (state, action) => {
        if (state.currentFile) {
          state.currentFile.inputMessages = action.payload.inputMessages;
        }
      });
  },
});

export const getChatHistorySlice = chatHistorySlice;
export default chatHistorySlice.reducer;
