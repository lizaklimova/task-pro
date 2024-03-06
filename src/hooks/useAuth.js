import { useSelector } from 'react-redux';
import {
  selectIsLoggedIn,
  selectIsRefreshing,
  selectIsLoading,
  selectUsername,
  selectUserEmail,
} from '../redux/auth/authSelectors.js';

export const useAuth = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isRefreshing = useSelector(selectIsRefreshing);
  const isLoading = useSelector(selectIsLoading);
  const username = useSelector(selectUsername);
  const userEmail = useSelector(selectUserEmail);

  return { isLoggedIn, isRefreshing, isLoading, username, userEmail };
};
