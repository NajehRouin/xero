import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'; // This import is required for toBeInTheDocument
import App from './App';

test('renders Connect to Xero button', () => {
  render(<App />);
 
});

