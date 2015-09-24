import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';

const INITIAL_STATE = {
  contacts: [{ _id: 1, name: 'Jeremy' }],
  lastContactId: 1
};

export default handleActions({
  ADD_CONTACT: (state, { payload }) => ({
    ...state,
    lastContactId: state.lastContactId + 1,
    contacts: [...state.contacts, {
      ...payload,
      _id: state.lastContactId + 1
    }]
  })
}, INITIAL_STATE);
