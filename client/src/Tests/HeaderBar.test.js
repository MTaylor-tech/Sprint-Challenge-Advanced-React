import React from 'react';
import ReactDOM from 'react-dom';
import { render, screen } from '@testing-library/react'
import HeaderBar from '../Components/HeaderBar';


it('renders without crashing', () => {
  const table = document.createElement('table');
  ReactDOM.render(<HeaderBar />, table);
  ReactDOM.unmountComponentAtNode(table);
});
