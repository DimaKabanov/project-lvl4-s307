import axios from 'axios';
import { createAction } from 'redux-actions';
import routes from '../routes';
import socket from '../socket';

// MODALS

export const openAddChannelModal = createAction('OPEN_ADD_CHANNEL_MODAL');
export const closeAddChannelModal = createAction('CLOSE_ADD_CHANNEL_MODAL');

export const openDelChannelModal = createAction('OPEN_DEL_CHANNEL_MODAL');
export const closeDelChannelModal = createAction('CLOSE_DEL_CHANNEL_MODAL');

export const openRenameChannelModal = createAction('OPEN_RENAME_CHANNEL_MODAL');
export const closeRenameChannelModal = createAction('CLOSE_RENAME_CHANNEL_MODAL');

// CHANNELS

export const setCurrentChannel = createAction('SET_CURRENT_CHANNEL');

export const addChannelRequest = createAction('CHANNEL_ADD_REQUEST');
export const addChannelSuccess = createAction('CHANNEL_ADD_SUCCESS');
export const addChannelFailure = createAction('CHANNEL_ADD_FAILURE');

export const addChannel = (channelData, resetForm) => async (dispatch) => {
  dispatch(addChannelRequest());
  try {
    const data = { attributes: { ...channelData } };
    const response = await axios.post(routes.channelsUrl(), { data });
    dispatch(addChannelSuccess({ channel: response.data }));
    resetForm();
    dispatch(closeAddChannelModal());
  } catch (evt) {
    dispatch(addChannelFailure());
  }
};

export const channelCreated = createAction('CHANNEL_CREATED');

export const getNewChannel = () => (dispatch) => {
  socket.on('newChannel', (channel) => {
    dispatch(channelCreated(channel.data.attributes));
  });
};

export const delChannelRequest = createAction('CHANNEL_DEL_REQUEST');
export const delChannelSuccess = createAction('CHANNEL_DEL_SUCCESS');
export const delChannelFailure = createAction('CHANNEL_DEL_FAILURE');

export const deleteChannel = channelId => async (dispatch) => {
  dispatch(delChannelRequest());
  try {
    await axios.delete(routes.channelUrl(channelId), channelId);
    dispatch(delChannelSuccess());
    dispatch(closeDelChannelModal());
  } catch (evt) {
    dispatch(addChannelFailure());
  }
};

export const channelDeleted = createAction('CHANNEL_DELETED');

export const removeChannel = () => (dispatch) => {
  socket.on('removeChannel', (channel) => {
    dispatch(channelDeleted(channel.data.id));
  });
};

export const renameChannelRequest = createAction('CHANNEL_RENAME_REQUEST');
export const renameChannelSuccess = createAction('CHANNEL_RENAME_SUCCESS');
export const renameChannelFailure = createAction('CHANNEL_RENAME_FAILURE');

export const renameChannel = (channelName, channelId, resetForm) => async (dispatch) => {
  dispatch(renameChannelRequest());
  try {
    const data = { attributes: { ...channelName } };
    const response = await axios.patch(routes.channelUrl(channelId), { data });
    dispatch(renameChannelSuccess({ channel: response.data }));
    resetForm();
    dispatch(closeRenameChannelModal());
  } catch (evt) {
    dispatch(renameChannelFailure());
  }
};

export const channelRenamed = createAction('CHANNEL_RENAMED');

export const changeChannelName = () => (dispatch) => {
  socket.on('renameChannel', (channel) => {
    dispatch(channelRenamed(channel.data.attributes));
  });
};

// MESSAGES

export const sendMessageRequest = createAction('MESSAGE_SEND_REQUEST');
export const sendMessageSuccess = createAction('MESSAGE_SEND_SUCCESS');
export const sendMessageFailure = createAction('MESSAGE_SEND_FAILURE');

export const sendMessage = (messageData, channelId, resetForm) => async (dispatch) => {
  dispatch(sendMessageRequest());
  try {
    const data = { attributes: { ...messageData } };
    const response = await axios.post(routes.messagesUrl(channelId), { data });
    dispatch(sendMessageSuccess({ message: response.data }));
    resetForm();
  } catch (evt) {
    dispatch(sendMessageFailure());
  }
};

export const messageReceived = createAction('MESSAGE_RECEIVED');

export const getNewMessage = () => (dispatch) => {
  socket.on('newMessage', (message) => {
    dispatch(messageReceived(message.data.attributes));
  });
};
