// import { createAsyncThunk } from "@reduxjs/toolkit";
// import { userAPI } from "../../api/ApiPool";

// export const fetchVirtualAssistants = createAsyncThunk(
//   "virtualAssistants/get",
//   async (data) => {
//     try {
//       const response = await userAPI.virtualAssistants();
//       // console.log(response.data)
//       return response.data;
//     } catch (error) {
//       return error;
//     }
//   }
// );

// src/store/thunks/virtualAssistantsThunk.js
import { createAsyncThunk } from "@reduxjs/toolkit";
import { userAPI } from "../../api/ApiPool";

export const fetchVirtualAssistants = createAsyncThunk(
  "virtualAssistants/fetchVirtualAssistants",
  async () => {
    const response = await userAPI.virtualAssistants();
    return response.data;
  }
);

export const addVirtualAssistant = createAsyncThunk(
  "virtualAssistants/addVirtualAssistant",
  async (assistantData, { getState }) => {
    const state = getState();
    const assistants = state.virtualAssistants.identifier;
    const maxId =
      assistants.length > 0
        ? Math.max(...assistants.map((assistant) => parseInt(assistant.id)))
        : 0;
    const newId = (maxId + 1).toString(); // Ensure the ID is a string
    const newAssistantData = { ...assistantData, id: newId };

    const response = await userAPI.addVirtualAssistant(newAssistantData);
    return response.data;
  }
);

export const updateVirtualAssistant = createAsyncThunk(
  "virtualAssistants/updateVirtualAssistant",
  async ({ id, data }) => {
    const response = await userAPI.updateVirtualAssistant(id, data);
    return response.data;
  }
);

export const deleteVirtualAssistant = createAsyncThunk(
  "virtualAssistants/deleteVirtualAssistant",
  async (id) => {
    await userAPI.deleteVirtualAssistant(id);
    return id;
  }
);
