import axios from 'axios';
import { ENDPOINTS } from 'api';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const support = createAsyncThunk(
  'email/support',
  async ({ email, text }, thunkAPI) => {
    try {
      const { data } = await axios.post(ENDPOINTS.email.support, {
        email,
        comment: text,
      });

      return data;
    } catch ({ message }) {
      thunkAPI.rejectWithValue(message);
    }
  }
);
