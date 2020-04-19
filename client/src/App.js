import React, {Component} from 'react';
import axios from 'axios';
import './App.css';
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
        <header className="App-header">Player Info
        </header>
        {this.state.players.map(p=><Player player={p} />)}
      </div>
    );
  }
}

export default App;

//<p>{this.state.players.map(p=><Player player={p} />)}</p>
