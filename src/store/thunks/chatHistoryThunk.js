// import { createAsyncThunk } from "@reduxjs/toolkit";
// import { userAPI } from "../../api/ApiPool";

// export const fetchChatHistory = createAsyncThunk(
//   "chatHistory/get",
//   async (data) => {
//     try {
//       const response = await userAPI.chatHistory();
//       // console.log(response.data)
//       return response.data;
//     } catch (error) {
//       return error;
//     }
//   }
// );
import { createAsyncThunk } from "@reduxjs/toolkit";
import { userAPI } from "../../api/ApiPool";

export const fetchChatHistory = createAsyncThunk(
  "chatHistory/fetchChatHistory",
  async (fileId) => {
    const response = await userAPI.chatHistory();
    const chatHistory = response.data.find((file) => file.id === fileId);
    return chatHistory;
  }
);

export const addInputMessage = createAsyncThunk(
  "chatHistory/addInputMessage",
  async ({ fileId, newMessage }, { getState }) => {
    const chatHistory = getState().chatHistory.currentFile;
    const updatedMessages = [...chatHistory.inputMessages, newMessage];
    const response = await userAPI.updateChatHistory(fileId, {
      ...chatHistory,
      inputMessages: updatedMessages,
    });
    return response.data;
  }
);

export const updateSelectedText = createAsyncThunk(
  "chatHistory/updateSelectedText",
  async ({ fileId, selectedTextId, selectedText }, { getState }) => {
    const chatHistory = getState().chatHistory.currentFile;
    const response = await userAPI.updateChatHistory(fileId, {
      ...chatHistory,
      selectedText,
      selectedTextId,
    });
    return response.data;
  }
);
