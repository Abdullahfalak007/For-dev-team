// import { createAsyncThunk } from "@reduxjs/toolkit";
// import { userAPI } from "../../api/ApiPool";

// export const fetchClients = createAsyncThunk("clients/get", async (data) => {
//   try {
//     const response = await userAPI.clients();
//     // console.log(response.data)
//     return response.data;
//   } catch (error) {
//     return error;
//   }
// });

import { createAsyncThunk } from "@reduxjs/toolkit";
import { userAPI } from "../../api/ApiPool";

export const fetchClients = createAsyncThunk(
  "clients/fetchClients",
  async () => {
    const response = await userAPI.clients();
    return response.data;
  }
);

export const addClient = createAsyncThunk(
  "clients/addClient",
  async (clientData) => {
    const response = await userAPI.addClient(clientData);
    return response.data;
  }
);

export const updateClient = createAsyncThunk(
  "clients/updateClient",
  async ({ id, data }) => {
    const response = await userAPI.updateClient(id, data);
    return response.data;
  }
);

export const deleteClient = createAsyncThunk(
  "clients/deleteClient",
  async (id) => {
    await userAPI.deleteClient(id);
    return id;
  }
);
