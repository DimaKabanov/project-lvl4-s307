import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import * as actions from '../actions';



const channels = handleActions({
  [actions.channelCreated](state, { payload: channel }) {
    return [...state, channel];
  },
}, {});

export default combineReducers({
  channels,
});
