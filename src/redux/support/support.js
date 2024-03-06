import axios from 'axios';
import { ENDPOINTS } from 'api';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const support = createAsyncThunk(
  'email/support',
  async ({ email, text }, thunkAPI) => {
    console.log(email, text);
    try {
      const data = await axios.post(ENDPOINTS.email.support, {
        email,
        comment: text,
      });
      /*      console.log(data); */
      return data;
    } catch ({ message }) {
      thunkAPI.rejectWithValue(message);
    }
  }
);

/* import axios from 'axios';
import { ENDPOINTS } from 'api';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const support = createAsyncThunk(
  'email/support',
  async (datahelp, thunkAPI) => {
    try {
      const { data } = await axios.post(ENDPOINTS.email.support, {
        email: datahelp.email,
        comment: datahelp.text,
      });

      return data;
    } catch ({ message }) {
      thunkAPI.rejectWithValue(message);
    }
  }
);
 */
