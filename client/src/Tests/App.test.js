import React from 'react';
import ReactDOM from 'react-dom';
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import axiosMock from 'axios';
import App from '../Components/App';

jest.mock('axios');

const mockData = [{ id: 0, name: "Alex Morgan", country: "United States", searches: 100 },
                  { id:1, name: "Megan Rapinoe", country: "United States", searches: 99 },
                  { id:2, name: "Marta", country: "Brazil", searches: 18 }];

  it('renders without crashing', async () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('fetches data on an axios call', async () => {
    //render(<App />);
    axiosMock.get.mockResolvedValueOnce({
      data: mockData,
    });
    axiosMock.get.mockImplementationOnce(() => Promise.resolve(data));
    expect(axiosMock.get).toHaveBeenCalledTimes(1);
    expect(axiosMock.get).toHaveBeenCalledWith('http://localhost:5000/api/players');
    //expect(screen.getByText('Alex Morgan'));
  });

  it('fetches erroneously data from an API', async () => {
    const errorMessage = 'Network Error';
    axiosMock.get.mockImplementationOnce(() =>
      Promise.reject(new Error(errorMessage)),
    );
  });
