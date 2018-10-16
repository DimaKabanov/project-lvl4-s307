import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import { reducer as formReducer } from 'redux-form';
import * as actions from '../actions';

// MODALS

const modalCreateChannel = handleActions({
  [actions.openAddChannelModal]() {
    return { isOpen: true };
  },
  [actions.closeAddChannelModal]() {
    return { isOpen: false };
  },
}, { isOpen: false });

const modalDeleteChannel = handleActions({
  [actions.openDelChannelModal](state, { payload: channel }) {
    return { channel, isOpen: true };
  },
  [actions.closeDelChannelModal]() {
    return { channel: {}, isOpen: false };
  },
}, { channel: {}, isOpen: false });

// CHANNELS

const addChannelState = handleActions({
  [actions.addChannelRequest]() {
    return 'requested';
  },
  [actions.addChannelSuccess]() {
    return 'failed';
  },
  [actions.addChannelFailure]() {
    return 'successed';
  },
}, 'none');

const delChannelState = handleActions({
  [actions.delChannelRequest]() {
    return 'requested';
  },
  [actions.delChannelSuccess]() {
    return 'failed';
  },
  [actions.delChannelFailure]() {
    return 'successed';
  },
}, 'none');

const channels = handleActions({
  [actions.channelCreated](state, { payload: channel }) {
    return [...state, channel];
  },
  [actions.channelDeleted](state, { payload: id }) {
    return state.filter(channel => channel.id !== id);
  },
}, {});

const currentChannelId = handleActions({
  [actions.setCurrentChannel](state, { payload: id }) {
    return id;
  },
}, 1);

// MESSAGES

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

export default combineReducers({
  sendMessageState,
  channels,
  messages,
  currentChannelId,
  addChannelState,
  delChannelState,
  modalCreateChannel,
  modalDeleteChannel,
  form: formReducer,
});
