import React from 'react';
import ReactDOM from 'react-dom';
import Player from '../Components/Player';

it('renders without crashing', () => {
  const testPlayer = {id: 0, name: 'Test Player', country: 'England', searches: 99};
  const div = document.createElement('div');
  ReactDOM.render(<Player player={testPlayer}/>, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('displays player data', ()=> {
  const testPlayer = {id: 0, name: 'Test Player', country: 'England', searches: 99};
  const table = document.createElement('table');
  ReactDOM.render(<Player player={testPlayer} key={testPlayer.id} />, table);


  ReactDOM.unmountComponentAtNode(table);

})
