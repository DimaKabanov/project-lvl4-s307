import React from 'react';
import { Field, reduxForm } from 'redux-form';
import connect from '../connect';
import { getUserName } from '../user';

const mapStateToProps = ({ currentChannelId, sendMessageState }) => {
  const props = { currentChannelId, sendMessageState };
  return props;
};

@connect(mapStateToProps)
class MessageForm extends React.Component {
  sendMessage = (message) => {
    const { sendMessage, currentChannelId, reset } = this.props;
    const messageData = {
      ...message,
      username: getUserName(),
    };
    sendMessage(messageData, currentChannelId, reset);
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
