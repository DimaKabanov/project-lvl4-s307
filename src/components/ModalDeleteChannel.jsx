import React from 'react';
import cn from 'classnames';
import connect from '../connect';

const mapStateToProps = ({ delChannelState, modalDeleteChannel }) => {
  const props = { delChannelState, modalDeleteChannel };
  return props;
};

@connect(mapStateToProps)
class ModalCreateChannel extends React.Component {
  deleteChannel = channelId => () => {
    const { deleteChannel } = this.props;
    return deleteChannel(channelId);
  }

  onCloseDelChannelModal = () => {
    const { closeDelChannelModal } = this.props;
    closeDelChannelModal();
  }

  render() {
    const { modalDeleteChannel, delChannelState } = this.props;
    const { channel, isOpen } = modalDeleteChannel;

    const modalClass = cn({
      modal: true,
      fade: true,
      show: isOpen,
    });

    const disabled = delChannelState === 'requested';

    const modalStyle = {
      display: isOpen ? 'block' : 'none',
    };

    return (
      <React.Fragment>
        <div className={modalClass} tabIndex="-1" role="dialog" style={modalStyle}>
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">{`Are you sure you want to delete the channel "${channel.name}"`}</h5>
                <button onClick={this.onCloseDelChannelModal} type="button" className="close" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <button
                  type="button"
                  className="btn btn-secondary mr-2"
                  onClick={this.onCloseDelChannelModal}
                >
                  Close
                </button>
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={this.deleteChannel(channel.id)}
                  disabled={disabled}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
        {isOpen && <div className="modal-backdrop fade show" />}
      </React.Fragment>
    );
  }
}

export default ModalCreateChannel;
