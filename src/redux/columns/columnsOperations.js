import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const addColumn = createAsyncThunk(
  'columns/addColumn',
  async (newColumn, thunkAPI) => {
    try {
      const response = await axios.post('/api/columns', newColumn);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteColumn = createAsyncThunk(
  'columns/deleteColumn',
  async (columnId, thunkAPI) => {
    try {
      const response = await axios.delete(`/api/columns/${columnId}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const editColumn = createAsyncThunk(
  'columns/editColumn',
  async ({ editedColumn, id }, thunkAPI) => {
    try {
      const response = await axios.patch(`/api/columns/${id}`, editedColumn);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchColumnsOfBoard = createAsyncThunk(
  'columns/fetchAllOfBoard',
  async (boardId, thunkAPI) => {
    try {
      const response = await axios.get('/api/columns', boardId);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
