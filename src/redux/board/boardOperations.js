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
      const { title, iconId, backgroundId } = newBoard;
      formData.append('title', title);
      formData.append('iconId', iconId);
      formData.append('backgroundId', backgroundId);

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

export const updateBoard = createAsyncThunk(
  'boards/updateBoard',
  async ({ boardId, dataUpdate }, thunkAPI) => {
    try {
      const formData = new FormData();
      const { title, iconId, backgroundId } = dataUpdate;
      formData.append('title', title);
      formData.append('iconId', iconId);
      formData.append('backgroundId', backgroundId);

      const { data } = await axiosInstance.patch(
        ENDPOINTS.boards.oneBoard(boardId),
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

export const filterCards = createAsyncThunk(
  'boards/filterCards',
  async ({ boardId, priority }, thunkAPI) => {
    try {
      const { data } = await axiosInstance.get(
        ENDPOINTS.boards.boardFilter(boardId) + `?priority=${priority}`
      );

      return data.board[0];
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addColumn = createAsyncThunk(
  'columns/addColumn',
  async (newColumn, thunkAPI) => {
    try {
      const response = await axiosInstance.post(
        ENDPOINTS.columns.allColumns,
        newColumn
      );
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
      await axiosInstance.delete(ENDPOINTS.columns.oneColumn(columnId));
      return columnId;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const editColumn = createAsyncThunk(
  'columns/editColumn',
  async ({ editedColumn, id }, thunkAPI) => {
    try {
      const response = await axiosInstance.patch(
        ENDPOINTS.columns.oneColumn(id),
        editedColumn
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const moveCard = createAsyncThunk(
  'cards/moveCard',
  async ({ cardId, columnId }, thunkAPI) => {
    try {
      const { data } = await axiosInstance.patch(
        ENDPOINTS.cards.cardStatus(cardId),
        columnId
      );
      console.log(data.card);
      return { card: data.card, oldColumn: columnId };
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
