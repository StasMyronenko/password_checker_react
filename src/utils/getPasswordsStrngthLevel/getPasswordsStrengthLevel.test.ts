import { getPasswordsStrengthLevel } from './getPasswordsStrengthLevel';
import { STRENGTH_LEVEL } from '../../constants/strengthLevel';

describe('getPasswordsStrengthLevel', () => {
  it('should return STRENGTH_LEVEL.EMPTY if text is empty', () => {
    const ans = getPasswordsStrengthLevel('');
    expect(ans).toBe(STRENGTH_LEVEL.EMPTY);
  });

  it('should return STRENGTH_LEVEL.SHORT if text is less than 8 characters', () => {
    const ans = getPasswordsStrengthLevel('123');
    expect(ans).toBe(STRENGTH_LEVEL.SHORT);
  });

  it('should return STRENGTH_LEVEL.EASY if text is more than 8 characters and we have digits only', () => {
    const ans = getPasswordsStrengthLevel('1234567890');
    expect(ans).toBe(STRENGTH_LEVEL.EASY);
  });

  it('should return STRENGTH_LEVEL.EASY if text is more than 8 characters and we have digits and letters', () => {
    const ans = getPasswordsStrengthLevel('1234567890a');
    expect(ans).toBe(STRENGTH_LEVEL.MEDIUM);
  });

  it('should return STRENGTH_LEVEL.EASY if text is more than 8 characters and we have digits, letters and symbols', () => {
    const ans = getPasswordsStrengthLevel('1234567890a!');
    expect(ans).toBe(STRENGTH_LEVEL.HARD);
  });
});