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
  async (assistantData) => {
    const response = await userAPI.addVirtualAssistant(assistantData);
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
