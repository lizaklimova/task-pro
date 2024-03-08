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
      return data.card;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteCard = createAsyncThunk(
  'cards/deleteCard',
  async ({ cardId, columnId }, thunkAPI) => {
    try {
      await axiosInstance.delete(ENDPOINTS.cards.oneCard(cardId));
      return { cardId, columnId };
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const editCard = createAsyncThunk(
  'cards/editCard',
  async ({ cardId, editedCard }, thunkAPI) => {
    try {
      console.log(cardId);
      console.log(editedCard);
      const { data } = await axiosInstance.patch(
        ENDPOINTS.cards.oneCard(cardId),
        editedCard
      );

      return { card: data.card, columnId: editedCard.column };
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
