import React, {Component} from 'react';

class Player extends Component {

  clickHandler = () => {
    this.props.setFav(this.props.player.id);
  };

  render() {

    return (
      <tr>
        {this.props.player.fav?<td onClick={this.clickHandler}>&#9733;</td>:<td onClick={this.clickHandler}>&#9734;</td>}
        <td>{this.props.player.id+1}</td>
        <td id={`PlayerName${this.props.player.id}`}>{this.props.player.name}</td>
        <td>{this.props.player.country}</td>
        <td>{this.props.player.searches}</td>
      </tr>
    );
  }
}

export default Player;
