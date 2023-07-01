import React from 'react';
import { render, screen } from '@testing-library/react';

import App from './App';

jest.mock('./components/widgets/Password/Password', () => ({
  Password: () => <div data-testid="Password" />,
}))
test('renders render password component', () => {
  render(<App />);
  const passwordDiv = screen.getByTestId('Password');
  expect(passwordDiv).toBeInTheDocument();
});
