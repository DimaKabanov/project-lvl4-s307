import cookies from 'js-cookie';
import React from 'react';
import ChannelList from '../containers/ChannelList';
import MessageList from '../containers/MessageList';
import MessageForm from './MessageForm';

const Chat = () => (
  <div className="row">
    <div className="col-3">
      <h5 className="mb-3">{cookies.get('username')}</h5>
      <ChannelList />
    </div>
    <div className="col-9">
      <MessageList />
      <MessageForm />
    </div>
  </div>
);

export default Chat;
