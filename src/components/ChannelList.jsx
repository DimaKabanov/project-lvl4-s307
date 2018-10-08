import React from 'react';
import cn from 'classnames';
import connect from '../connect';

const mapStateToProps = ({ channels, currentChannelId }) => {
  const props = { channels, currentChannelId };
  return props;
};

@connect(mapStateToProps)
class ChannelList extends React.Component {
  getListItemClass = (channelId) => {
    const { currentChannelId } = this.props;

    return cn({
      'list-group-item': true,
      'list-group-item-action': true,
      active: currentChannelId === channelId,
    });
  }

  renderСhannels = () => {
    const { channels } = this.props;

    return channels.map(({ name, id }) => (
      <button key={id} type="button" className={this.getListItemClass(id)}>
        {name}
      </button>
    ));
  }

  render() {
    return (
      <div className="list-group">
        {this.renderСhannels()}
      </div>
    );
  }
}

export default ChannelList;
