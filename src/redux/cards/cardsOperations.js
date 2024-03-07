import { createAsyncThunk } from '@reduxjs/toolkit';
import { axiosInstance, ENDPOINTS } from 'api';

export const addCard = createAsyncThunk(
  'cards/addCard',
  async (cardInfo, thunkAPI) => {
    try {
      const { data } = await axiosInstance.post(
        ENDPOINTS.cards.allCards,
        cardInfo
      );
      console.log(data);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteCard = createAsyncThunk(
  'cards/deleteCard',
  async (cardId, thunkAPI) => {
    try {
      const { data } = await axiosInstance.delete(
        ENDPOINTS.cards.oneCard(cardId)
      );
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const editCard = createAsyncThunk(
  'cards/editCard',
  async (cardId, thunkAPI) => {
    try {
      const { data } = await axiosInstance.patch(
        ENDPOINTS.cards.oneCard(cardId)
      );
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
