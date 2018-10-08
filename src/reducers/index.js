import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import { reducer as formReducer } from 'redux-form';
import * as actions from '../actions';

const sendMessageState = handleActions({
  [actions.sendMessageRequest]() {
    return 'requested';
  },
  [actions.sendMessageSuccess]() {
    return 'failed';
  },
  [actions.sendMessageFailure]() {
    return 'successed';
  },
}, 'none');

const messages = handleActions({
  [actions.messageReceived](state, { payload }) {
    return [...state, payload];
  },
}, []);

const channels = handleActions({
  [actions.channelCreated](state, { payload: channel }) {
    return [...state, channel];
  },
}, {});

const currentChannelId = handleActions({
  [actions.setCurrentChannel](state, { payload: id }) {
    return id;
  },
}, 1);

export default combineReducers({
  sendMessageState,
  channels,
  messages,
  currentChannelId,
  form: formReducer,
});
