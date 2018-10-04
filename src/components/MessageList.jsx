import React from 'react';

export default class MessageList extends React.Component {
  renderMessage = messages => (
    messages.map(message => (
      <div>
        {message}
      </div>
    ))
  )

  render() {
    const { messages } = this.props;
    return (
      <div className="border rounded h-100 mb-3">
        {this.renderMessage(messages)}
      </div>
    );
  }
}
