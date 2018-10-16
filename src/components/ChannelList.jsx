import React from 'react';
import cn from 'classnames';
import connect from '../connect';
import ModalCreateChannel from './ModalCreateChannel';
import ModalDeleteChannel from './ModalDeleteChannel';

const mapStateToProps = ({ channels, currentChannelId }) => {
  const props = { channels, currentChannelId };
  return props;
};

@connect(mapStateToProps)
class ChannelList extends React.Component {
  getListItemClass = (channelId) => {
    const { currentChannelId } = this.props;

    return cn({
      btn: true,
      'btn-link': true,
      'nav-link': true,
      'font-weight-bold': currentChannelId === channelId,
      'font-weight-light': currentChannelId !== channelId,
    });
  }

  onOpenAddChannelModal = () => {
    const { openAddChannelModal } = this.props;
    openAddChannelModal();
  }

  onOpenDelChannelModal = channel => () => {
    const { openDelChannelModal } = this.props;
    openDelChannelModal(channel);
  }

  renderControls = channel => (
    <button onClick={this.onOpenDelChannelModal(channel)} type="button" className="close" aria-label="Close">
      <span aria-hidden="true">&times;</span>
    </button>
  );

  renderСhannels = () => {
    const { channels } = this.props;

    return channels.map(({ name, id, removable }) => (
      <li key={id} className="nav-item d-flex justify-content-between align-items-center">
        <button className={this.getListItemClass(id)} type="button">{name}</button>
        {removable && this.renderControls({ name, id })}
      </li>
    ));
  }

  render() {
    return (
      <React.Fragment>
        <ul className="nav flex-column mb-3">
          {this.renderСhannels()}
        </ul>
        <button
          type="button"
          className="btn btn-outline-success btn-block"
          onClick={this.onOpenAddChannelModal}
        >
          Add channel
        </button>
        <ModalCreateChannel />
        <ModalDeleteChannel />
      </React.Fragment>
    );
  }
}

export default ChannelList;
