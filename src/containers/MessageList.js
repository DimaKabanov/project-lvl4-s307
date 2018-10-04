import { connect } from 'react-redux';
import MessageList from '../components/MessageList';

const mapStateToProps = ({ messages }) => {
  const props = { messages };
  return props;
};

const MessageListContainer = connect(mapStateToProps)(MessageList);

export default MessageListContainer;
