import { CURRENT_USER } from '../Actions/types';

const initialState = {
  isLoggedIn: false,
  user: {},
};


export default function (state = initialState, action) {
  switch (action.type) {
    case CURRENT_USER:
      if (!action.payload.data) {
        window.localStorage.removeItem('token');
        return { initialState };
      } else if (action.payload.data) {
        return {
          isLoggedIn: true,
          user: action.payload.data,
        };
      }
      break;
    default:
      return state;
  }
}
