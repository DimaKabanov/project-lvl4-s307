import { connect } from 'react-redux';
import Chat from '../components/Chat';

const mapStateToProps = (state) => {
  console.log(state);
  // const props = { tasks, newTaskText };
  return {};
};

const ChatContainer = connect(mapStateToProps)(Chat);

export default ChatContainer;
