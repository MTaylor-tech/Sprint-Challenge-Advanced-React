import React, {Component, useEffect} from 'react';
import axios from 'axios';
import '../CSS/App.css';
import Player from './Player.js';
import HeaderBar from './HeaderBar.js';
import useLocalStorage from '../Hooks/useLocalStorage';


class App extends Component {
  constructor() {
    super();
    this.state = {
      players: [],
      displayed: [],
      favorites: []
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

  setFav = (id) => {
    if (this.state.favorites.includes(id)) {
      this.setState({favorites: this.state.favorites.filter(i=>i!==id)});
    } else {
      this.setState({favorites: [...this.state.favorites, id]});
    }
  };

  setAllFavorites = (favs) => {
    this.setState({favorites: favs});
  }

  render() {
    return (
      <div className="App">
        <header><h1>Player Info</h1></header>
        <table>
          <HeaderBar favorites={this.state.favorites} setFavs={this.setAllFavorites} />
          <tbody>
            {this.state.players.map(p=><Player player={p} key={p.id} favorites={this.state.favorites} setFav={this.setFav} />)}
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;

//<p>{this.state.players.map(p=><Player player={p} />)}</p>
