import React, {Component} from 'react';
import axios from 'axios';
import '../CSS/App.css';
import Player from './Player.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
      players: []
    };
  }

  componentDidMount() {
    axios.get('http://localhost:5000/api/players')
      .then(response=>{
        this.setState({players:response.data});
        console.log(response);
      })
      .catch(error=>console.log(error));
  }

  render() {
    return (
      <div className="App">
        <header><h1>Player Info</h1></header>
        <table>
          <thead><tr><th>Rank</th><th>Name</th><th>Country</th><th>Number of Searches</th></tr></thead>
          <tbody>
            {this.state.players.map(p=><Player player={p} key={p.id} />)}
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;

//<p>{this.state.players.map(p=><Player player={p} />)}</p>
