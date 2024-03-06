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

      return data.boards;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const createBoard = createAsyncThunk(
  'boards/createBoard',
  async (newBoard, thunkAPI) => {
    try {
      const formData = new FormData();
      const { title, iconId } = newBoard;
      formData.append('title', title);
      formData.append('iconId', iconId);

      const { data } = await axiosInstance.post(
        ENDPOINTS.boards.allBoards,
        formData,
        { headers: { 'Content-Type': 'multipart/form-data' } }
      );

      return data.board;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteBoard = createAsyncThunk(
  'boards/deleteBoard',
  async (boardId, thunkAPI) => {
    try {
      const { data } = await axiosInstance.delete(
        ENDPOINTS.boards.oneBoard(boardId)
      );
      console.log(data);
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

      return data.board[0];
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const filterBoard = createAsyncThunk(
  'boards/filterBoard',
  async ({ boardId, priority }, thunkAPI) => {
    try {
      const { data } = await axiosInstance.get(
        ENDPOINTS.boards.boardFilter(boardId, priority)
      );

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
