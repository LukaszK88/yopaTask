import axios from 'axios';
import setAuthorizationToken from '../utils/setAuthorizationToken';
import { CURRENT_USER } from './types';
import { config } from '../config';

export function currentLoggedInUser(token) {
  const request = axios.get(`${config.API.base}user`, { Authorization: `Bearer ${token}` });

  return {
    type: CURRENT_USER,
    payload: request,
  };
}

export function logout() {
  return (dispatch) => {
    window.localStorage.removeItem('token');
    setAuthorizationToken(false);
    dispatch(currentLoggedInUser(null));
  };
}

export function loginUser(user) {
  return axios.post(`${API}authenticate`, user).then((response) => {
    const { token, message } = response.data;
    window.localStorage.setItem('token', token);
    setAuthorizationToken(token);
    return (dispatch) => {
      dispatch(currentLoggedInUser(token));
      window.location.reload();
    };
  }).catch(error => (dispatch) => {

  });
}
