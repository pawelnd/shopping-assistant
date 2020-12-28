import axios from 'axios';
import { toaster } from './components/Toaster';
import store from './store/store';
import { getLoggedUserFailure } from './store/features/authSlice/auth.slice';

const handleHTTPErrors = (error: any) => {
  const statusCode = error?.response?.status;
  const message = error?.response?.data?.message || '';

  switch (statusCode) {
    case 404:
      toaster.showError('The requested resource does not exist or has been deleted');
      break;
    case 401:
      toaster.showError('Please login to access this resource');
      store.dispatch(getLoggedUserFailure());
      break;
    default:
      toaster.showError(message ?? 'Error occurred ');
  }
};

export const configureAxios = () => {
  axios.interceptors.response.use(undefined, function (error) {
    handleHTTPErrors(error);
    return Promise.reject(error);
  });
};

export default configureAxios;
