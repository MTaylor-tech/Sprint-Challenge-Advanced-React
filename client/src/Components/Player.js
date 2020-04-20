import React, {Component} from 'react';

class Player extends Component {

  render() {
    return (
      <tr>
        <td>{this.props.player.id+1}</td>
        <td>{this.props.player.name}</td>
        <td>{this.props.player.country}</td>
        <td>{this.props.player.searches}</td>
      </tr>
    );
  }
}

export default Player;
