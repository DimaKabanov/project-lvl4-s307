import React from 'react';

export default class ChannelList extends React.Component {
  renderСhannels = channels => (
    channels.map(({ name, id }) => (
      <button key={id} type="button" className="list-group-item list-group-item-action">{name}</button>
    ))
  )

  render() {
    const { channels } = this.props;
    return (
      <div className="list-group">
        {this.renderСhannels(channels)}
      </div>
    );
  }
}
