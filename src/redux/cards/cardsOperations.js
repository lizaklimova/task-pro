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

export const moveCard = createAsyncThunk(
  'cards/moveCard',
  async ({ cardId, newColumn, oldColumn }, thunkAPI) => {
    try {
      const { data } = await axiosInstance.patch(
        ENDPOINTS.cards.cardStatus(cardId),
        { columnId: newColumn }
      );

      return { card: data.card, oldColumn };
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const changeCardOrder = createAsyncThunk(
  'cards/changeCardOrder',
  async ({ cardId, columnId, order }, thunkAPI) => {
    try {
      const { data } = await axiosInstance.patch(
        ENDPOINTS.cards.cardOrder(cardId),
        { columnId, order }
      );

      return data.card;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getStatistics = createAsyncThunk(
  'cards/getStatistics',
  async (_, thunkAPI) => {
    try {
      const { data } = await axiosInstance.get(ENDPOINTS.cards.cardsStats);
      return data.stats;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getAllCards = createAsyncThunk(
  'cards/getAllCards',
  async (_, thunkAPI) => {
    try {
      const { data } = await axiosInstance.get(ENDPOINTS.cards.allCards);
      return data.cards;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
