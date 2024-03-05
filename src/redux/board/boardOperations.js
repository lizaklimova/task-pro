import { createAsyncThunk } from '@reduxjs/toolkit';
import { axiosInstance, ENDPOINTS } from 'api';

export const getBackgroundIcons = createAsyncThunk(
  'boards/getBackgroundIcons',
  async (_, thunkAPI) => {
    try {
      const { data } = await axiosInstance.get(ENDPOINTS.backgrounds);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getAllBoards = createAsyncThunk(
  'boards/getAllBoards',
  async (_, thunkAPI) => {
    try {
      const { data } = await axiosInstance.get(ENDPOINTS.boards.allBoards);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const createBoard = createAsyncThunk(
  'boards/createBoard',
  async (newBoard, thunkAPI) => {
    try {
      const { data } = await axiosInstance.post(
        ENDPOINTS.boards.allBoards,
        newBoard
      );
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getOneBoard = createAsyncThunk(
  'boards/getOneBoard',
  async (boardId, thunkAPI) => {
    try {
      const { data } = await axiosInstance.get(
        ENDPOINTS.boards.oneBoard(boardId)
      );
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
