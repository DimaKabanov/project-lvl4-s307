import { connect } from 'react-redux';
import ChannelList from '../components/ChannelList';

const mapStateToProps = ({ channels }) => {
  const props = { channels };
  return props;
};

const ChannelListContainer = connect(mapStateToProps)(ChannelList);

export default ChannelListContainer;
