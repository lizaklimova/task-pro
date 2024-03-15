export const handleRegLogFulfilled = (state, { payload }) => {
  state.user = payload.user;
  state.token = payload.user.tokenAccess;
  state.refreshToken = payload.user.refreshToken;
  state.isLoggedIn = true;
  state.isLoading = false;
};

export const handlePending = state => {
  state.isLoading = true;
};

export const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};
