import cookies from 'js-cookie';
import React from 'react';
import ChannelList from './ChannelList';
import MessageList from './MessageList';
import MessageForm from './MessageForm';
import { UserContext } from '../context';

const Chat = () => (
  <div className="row">
    <div className="col-3">
      <h5 className="mb-3">{cookies.get('username')}</h5>
      <ChannelList />
    </div>
    <div className="col-9">
      <MessageList />
      <UserContext.Consumer>
        {user => (
          <MessageForm currentUser={user.currentUser} />
        )}
      </UserContext.Consumer>
    </div>
  </div>
);

export default Chat;
