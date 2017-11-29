import {
  ADD_NEW_NOTE,
  FETCH_NOTES,
  FETCH_NOTE,
} from '../Actions/types';

const initialState = {
  notes: [],
  selectedNote: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case ADD_NEW_NOTE:
      return { ...state, notes: state.notes.concat(action.payload.data) };
    case FETCH_NOTE:
      return { ...state, selectedNote: action.payload.data };
    case FETCH_NOTES:
      return { ...state, notes: action.payload.data };
    default:
      return state;
  }
}
