import { createSlice } from '@reduxjs/toolkit';

const boardSearchSlice = createSlice({
  name: 'boardSearch',
  initialState: { search: '' },
  reducers: {
    boardSearch: (state, action) => {
      state.search = action.payload;
    },
  },
});

export const { boardSearch } = boardSearchSlice.actions;
export const boardSearchReducer = boardSearchSlice.reducer;
