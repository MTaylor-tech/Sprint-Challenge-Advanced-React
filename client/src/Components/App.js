import React, {Component} from 'react';
import axios from 'axios';
import '../CSS/App.css';
import Player from './Player.js';
import HeaderBar from './HeaderBar.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
      players: [],
      displayed: [],
      favorites: [4, 5, 11, 19]
    };
  }

  componentDidMount() {
    axios.get('http://localhost:5000/api/players')
      .then(response=>{
        this.setState({players:response.data.map(p=>{
            if (this.state.favorites.includes(p.id)) {
              return {...p, fav: true};
            } else {
              return {...p, fav: false};
            }
        })});
        console.log(response);
      })
      .catch(error=>console.log(error));
  }

  setFav = (id) => {
    if (this.state.favorites.includes(id)) {
      this.setState({favorites: this.state.favorites.filter(i=>i!==id)});
    } else {
      this.setState({favorites: [...this.state.favorites, id]});
    }
  };

  render() {
    return (
      <div className="App">
        <header><h1>Player Info</h1></header>
        <table>
          <HeaderBar />
          <tbody>
            {this.state.players.map(p=><Player player={p} key={p.id} setFav={this.setFav} />)}
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;

//<p>{this.state.players.map(p=><Player player={p} />)}</p>
