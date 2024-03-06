import { axiosInstance } from 'axios';
import { ENDPOINTS } from 'api';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const support = createAsyncThunk(
  'email/support',
  async ({ email, text }, thunkAPI) => {
    console.log(email, text);
    try {
      const data = await axiosInstance.post(ENDPOINTS.email.support, {
        email,
        comment: text,
      });

      return data;
    } catch ({ message }) {
      thunkAPI.rejectWithValue(message);
    }
  }
);
