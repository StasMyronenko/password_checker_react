import { render, screen } from '@testing-library/react';
import { Scale } from './Scale';
import { STRENGTH_LEVEL } from '../../../constants/strengthLevel';

jest.mock('../Point/Point', () => ({
  Point: () => <div data-testid="Point" />
}))

describe("shared Scale", () => {
  it("should render 3 points", () => {
    render(<Scale strengthLevel={STRENGTH_LEVEL.EMPTY} />)
    const points = screen.getAllByTestId('Point');
    expect(points.length).toEqual(3);
  });
});
