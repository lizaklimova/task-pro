import { createSlice } from '@reduxjs/toolkit';
import { handlePending, handleRejected } from '../helpers';
import { addCard, deleteCard, editCard } from './cardsOperations';

const cardsInitialState = {
  cards: [],
  isLoading: false,
  error: null,
};

const cardsSlice = createSlice({
  name: 'cards',
  initialState: cardsInitialState,
  extraReducers: builder => {
    builder
      .addCase(addCard.pending, handlePending)
      .addCase(deleteCard.pending, handlePending)
      .addCase(editCard.pending, handlePending)
      .addCase(addCard.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.cards = payload;
      })
      .addCase(deleteCard.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.cards = state.cards.filter(card => card.id !== payload);
      })
      .addCase(editCard.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        const card = state.cards.find(card => card.id === payload);
        const newCard = { ...card, ...payload };
        state.cards = [...state.cards, newCard];
      })
      .addCase(addCard.rejected, handleRejected)
      .addCase(deleteCard.rejected, handleRejected)
      .addCase(editCard.rejected, handleRejected);
  },
});

export const cardsReducer = cardsSlice.reducer;
