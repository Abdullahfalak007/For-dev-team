import {createAsyncThunk} from "@reduxjs/toolkit";
import {userAPI} from "../../api/ApiPool";

export const fetchTesting = createAsyncThunk(
    'testing/auth',
    async (data) => {
        try {
            const response = await userAPI.auth(data);
            // console.log(response.data)
            return response.data;
        }catch (error){
            return error;
        }
    }
);
