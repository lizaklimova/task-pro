import { useSelector } from 'react-redux';
import {
  selectIsLoggedIn,
  selectIsRefreshing,
  selectIsLoading,
  selectUsername,
} from '../redux/auth/authSelectors.js';

export const useAuth = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isRefreshing = useSelector(selectIsRefreshing);
  const isLoading = useSelector(selectIsLoading);
  const username = useSelector(selectUsername);

  return { isLoggedIn, isRefreshing, isLoading, username };
};
