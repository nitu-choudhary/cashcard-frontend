import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Landing Page', () => {
  render(<App />);
  const message = screen.getByText("Welcome to My Cash Card App");
  expect(message).toBeInTheDocument();
});
