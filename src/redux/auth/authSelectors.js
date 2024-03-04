export const selectUsername = ({ auth }) => auth.user.name;
export const selectUserEmail = ({ auth }) => auth.user.email;
export const selectIsLoggedIn = ({ auth }) => auth.isLoggedIn;
export const selectIsRefreshing = ({ auth }) => auth.isRefreshing;
export const selectIsLoading = ({ auth }) => auth.isLoading;
