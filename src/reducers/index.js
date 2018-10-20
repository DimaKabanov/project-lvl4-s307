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

const modalRenameChannel = handleActions({
  [actions.openRenameChannelModal](state, { payload: channel }) {
    return { channel, isOpen: true };
  },
  [actions.closeRenameChannelModal]() {
    return { channel: {}, isOpen: false };
  },
}, { channel: {}, isOpen: false });

// CHANNELS

const addChannelState = handleActions({
  [actions.addChannelRequest]() {
    return 'requested';
  },
  [actions.addChannelSuccess]() {
    return 'successed';
  },
  [actions.addChannelFailure]() {
    return 'failed';
  },
}, 'none');

const delChannelState = handleActions({
  [actions.delChannelRequest]() {
    return 'requested';
  },
  [actions.delChannelSuccess]() {
    return 'successed';
  },
  [actions.delChannelFailure]() {
    return 'failed';
  },
}, 'none');

const renameChannelState = handleActions({
  [actions.renameChannelRequest]() {
    return 'requested';
  },
  [actions.renameChannelSuccess]() {
    return 'successed';
  },
  [actions.renameChannelFailure]() {
    return 'failed';
  },
}, 'none');

const channels = handleActions({
  [actions.channelCreated](state, { payload: channel }) {
    return [...state, channel];
  },
  [actions.channelDeleted](state, { payload: id }) {
    return state.filter(channel => channel.id !== id);
  },
  [actions.channelRenamed](state, { payload: updatedChannelData }) {
    return state.map((channel) => {
      if (channel.id === updatedChannelData.id) {
        return { ...channel, name: updatedChannelData.name };
      }
      return channel;
    });
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
  renameChannelState,
  modalCreateChannel,
  modalDeleteChannel,
  modalRenameChannel,
  form: formReducer,
});
