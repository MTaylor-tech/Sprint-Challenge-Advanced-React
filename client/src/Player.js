import React, {Component} from 'react';

class Player extends Component {
  constructor(props) {
    super();
  }

  render() {
    return (
      <p>
        {this.props.player.name}
        {this.props.player.country}
        {this.props.player.searches}
      </p>
    );
  }
}

export default Player;
