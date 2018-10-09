import axios from 'axios';
import { createAction } from 'redux-actions';
import routes from '../routes';
import socket from '../socket';

export const channelCreated = createAction('CHANNEL_CREATED');
export const setCurrentChannel = createAction('SET_CURRENT_CHANNEL');

export const sendMessageRequest = createAction('SEND_MESSAGE_REQUEST');
export const sendMessageSuccess = createAction('SEND_MESSAGE_SUCCESS');
export const sendMessageFailure = createAction('SEND_MESSAGE_FAILURE');

export const sendMessage = (messageData, channelId) => async (dispatch) => {
  dispatch(sendMessageRequest());
  try {
    const data = { attributes: { ...messageData } };
    const response = await axios.post(routes.messagesUrl(channelId), { data });
    dispatch(sendMessageSuccess({ message: response.data }));
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
