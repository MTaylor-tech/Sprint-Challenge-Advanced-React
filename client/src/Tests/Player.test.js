import React from 'react';
import ReactDOM from 'react-dom';
import { render, screen } from '@testing-library/react'
import Player from '../Components/Player';

const testPlayer = {id: 0, name: 'Test Player', country: 'England', searches: 99};
const favorite = [0];
const notFavorite = [];

it('renders without crashing', () => {
  const table = document.createElement('tbody');
  ReactDOM.render(<Player player={testPlayer} favorites={notFavorite} />, table);
  ReactDOM.unmountComponentAtNode(table);
});

it('displays player data', ()=> {
  const table = document.createElement('tbody');
  render(<Player player={testPlayer} key={testPlayer.id} favorites={notFavorite} />, table);
  const td = document.getElementById('PlayerName0');
  expect(td.textContent).toBe("Test Player");
  expect(screen.getByText((content, element) => content.startsWith('England')));
});

it('displays correct star for favorite', ()=> {
  const table = document.createElement('tbody');
  render(<Player player={testPlayer} key={testPlayer.id} favorites={favorite} />, table);
  expect(screen.getByText((content, element) => content.startsWith('★')));
});

it('displays correct star for non-favorite', ()=> {
  const table = document.createElement('tbody');
  render(<Player player={testPlayer} key={testPlayer.id} favorites={notFavorite} />, table);
  expect(screen.getByText((content, element) => content.startsWith('☆')));
});
