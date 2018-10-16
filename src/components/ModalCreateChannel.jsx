import React from 'react';
import { Field, reduxForm } from 'redux-form';
import cn from 'classnames';
import connect from '../connect';

const mapStateToProps = ({ addChannelState, modalCreateChannel }) => {
  const props = { addChannelState, modalCreateChannel };
  return props;
};

@connect(mapStateToProps)
@reduxForm({ form: 'newChannel' })
class ModalCreateChannel extends React.Component {
  addChannel = (channelName) => {
    const { addChannel, reset } = this.props;
    return addChannel(channelName, reset);
  }

  onCloseAddChannelModal = () => {
    const { closeAddChannelModal, reset } = this.props;
    reset();
    closeAddChannelModal();
  }

  render() {
    const {
      handleSubmit,
      pristine,
      submitting,
      modalCreateChannel,
    } = this.props;

    const { isOpen } = modalCreateChannel;

    const modalClass = cn({
      modal: true,
      fade: true,
      show: isOpen,
    });

    const modalStyle = {
      display: isOpen ? 'block' : 'none',
    };

    return (
      <React.Fragment>
        <div className={modalClass} tabIndex="-1" role="dialog" style={modalStyle}>
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Enter new channel name</h5>
                <button onClick={this.onCloseAddChannelModal} type="button" className="close" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <form onSubmit={handleSubmit(this.addChannel)}>
                  <Field
                    required
                    name="name"
                    component="input"
                    type="text"
                    className="form-control mb-3"
                    id="newChannelName"
                  />
                  <button
                    type="button"
                    className="btn btn-secondary mr-2"
                    onClick={this.onCloseAddChannelModal}
                  >
                    Close
                  </button>
                  <button
                    type="submit"
                    className="btn btn-primary"
                    disabled={pristine || submitting}
                  >
                    Save changes
                  </button>
                </form>
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
