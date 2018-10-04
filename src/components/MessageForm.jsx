import React from 'react';

export default class MessageForm extends React.Component {
  render() {
    return (
      <form>
        <textarea placeholder="Enter message text" className="form-control mb-3" rows="3" />
        <button type="submit" className="btn btn-primary">Send message</button>
      </form>
    );
  }
}
