import { connect } from 'react-redux';
import ChannelList from '../components/ChannelList';

const mapStateToProps = ({ channels, currentChannelId }) => {
  const props = { channels, currentChannelId };
  return props;
};

const ChannelListContainer = connect(mapStateToProps)(ChannelList);

export default ChannelListContainer;
