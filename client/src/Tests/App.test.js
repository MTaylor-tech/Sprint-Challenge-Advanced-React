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


  it('fetches data on an axios call', async () => {
    axiosMock.get.mockResolvedValueOnce({
      data: mockData,
    });
    axiosMock.get.mockImplementationOnce(() => Promise.resolve(data));
  });

  it('fetches erroneously data from an API', async () => {
    const errorMessage = 'Network Error';
    axiosMock.get.mockImplementationOnce(() =>
      Promise.reject(new Error(errorMessage)),
    );
  });
