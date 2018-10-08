import React from 'react';
import connect from '../connect';

const mapStateToProps = ({ messages }) => {
  const props = { messages };
  return props;
};

@connect(mapStateToProps)
class MessageList extends React.Component {
  renderMessage = messages => (
    messages.map(message => (
      <div className="mb-2" key={message.id}>
        <strong className="mr-2">
          {`${message.username}:`}
        </strong>
        {message.message}
      </div>
    ))
  )

  render() {
    const { messages } = this.props;
    return (
      <div className="border rounded h-100 mb-3 p-3">
        {this.renderMessage(messages)}
      </div>
    );
  }
}

export default MessageList;
