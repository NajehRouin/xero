// App.test.tsx
import React from 'react';
import { render } from '@testing-library/react';
import App from './App'; // Ensure the path is correct

// Mock the API functions
jest.mock('./api', () => ({
  connectToXero: jest.fn(),
  getTenants: jest.fn(),
  fetchBalanceSheet: jest.fn(),
}));

// Mock the BalanceSheetTable component
jest.mock('./components/BalanceSheetTable', () => () => <div>Balance Sheet Table</div>);

describe('App Component', () => {
  test('renders the App component', () => {
    // Arrange & Act
    const { getByText } = render(<App />);

    // Assert: Check if the title is present
    expect(getByText(/xero integration/i)).toBeTruthy();

    // Assert: Check if the connect button is present
    expect(getByText(/connect to xero/i)).toBeTruthy();
  });
});
