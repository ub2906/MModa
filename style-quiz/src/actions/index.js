import axios from 'axios';

import { ADD_OPTIONS, HIDE_MODAL } from './types';

const ROOT_URL = 'http://localhost:8080';

export function addOption(id) {
  return function(dispatch) {
    let option = {};
    option[id] = true;
    dispatch({ type: ADD_OPTIONS, payload: option });
  }
}



export function hideModal() {
  return function(dispatch) {
    dispatch({ type: HIDE_MODAL });
  }
}
