import React from 'react';
import cookies from 'js-cookie';
import { Field, reduxForm } from 'redux-form';
import connect from '../connect';

const mapStateToProps = ({ currentChannelId, sendMessageState }) => {
  const props = { currentChannelId, sendMessageState };
  return props;
};

@connect(mapStateToProps)
class MessageForm extends React.Component {
  sendMessage = (message) => {
    const { sendMessage, currentChannelId } = this.props;
    const messageData = {
      ...message,
      currentChannelId,
      username: cookies.get('username'),
    };
    sendMessage(messageData);
  }

  render() {
    const { handleSubmit, sendMessageState } = this.props;
    const disabled = sendMessageState === 'requested';

    return (
      <form onSubmit={handleSubmit(this.sendMessage)}>
        <Field
          required
          name="message"
          component="textarea"
          className="form-control mb-3"
          rows="3"
        />

        <button
          type="submit"
          className="btn btn-primary"
          disabled={disabled}
        >
          Send message
        </button>
      </form>
    );
  }
}

export default reduxForm({
  form: 'newMessage',
})(MessageForm);
