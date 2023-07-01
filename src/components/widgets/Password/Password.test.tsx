import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { Password } from './Password';

jest.mock('../../shared/Scale/Scale', () => ({
  Scale: () => <div data-testid="Scale" />
}));

describe('widgets Password', () => {
    it('should use useState, useMemo on render', () => {
      const setStateMock = jest.fn();
      jest.spyOn(React, 'useState').mockImplementation(() => ['', setStateMock]);
      render(<Password />);
      const input: HTMLInputElement = screen.getByTestId('password-input');
      const testValue = 'somevalue';
      fireEvent.change(input, { target: { value: testValue }});
      expect(setStateMock).toHaveBeenCalled();
    });
});