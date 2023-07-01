import { render, screen } from '@testing-library/react';
import { Point } from './Point';

describe('Point', () => {
  it('should render', () => {
    render(<Point />);
    const point = screen.getByTestId('Point');
    expect(point).toBeInTheDocument();
  });
})