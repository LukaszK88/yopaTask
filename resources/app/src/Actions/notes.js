import axios from 'axios';
import {
  ADD_NEW_NOTE,
  FETCH_NOTES,
  FETCH_NOTE,
} from './types';
import { config } from '../config';

export function addSubNote(data) {
  return axios.post(`${config.API.base}sub-note`, data).then(response => (dispatch) => {
    dispatch(getNote(data.note_id));
  });
}

export function addNote(data) {
  const request = axios.post(`${config.API.base}notes`, data);

  return {
    type: ADD_NEW_NOTE,
    payload: request,
  };
}

export function getNotes() {
  const request = axios.get(`${config.API.base}notes`);

  return {
    type: FETCH_NOTES,
    payload: request,
  };
}

export function getNote(noteId) {
  const request = axios.get(`${config.API.base}notes/${noteId}`);

  return {
    type: FETCH_NOTE,
    payload: request,
  };
}
