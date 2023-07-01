import {isDigitInText, isLettersInText, isSymbolInText, STRENGTH_LEVEL} from '../../constants/strengthLevel';

export const getPasswordsStrengthLevel = (password: string): STRENGTH_LEVEL => {
  if (password.length === 0) {
    return STRENGTH_LEVEL.EMPTY;
  }

  if (password.length < 8) {
    return STRENGTH_LEVEL.SHORT;
  }

  const isLetter = isLettersInText(password);
  const isDigit = isDigitInText(password);
  const isSymbol = isSymbolInText(password);

  const sum = Number(isLetter) + Number(isDigit) + Number(isSymbol);

  console.log(sum);
  if (sum === 1) return STRENGTH_LEVEL.EASY;
  if (sum === 2) return STRENGTH_LEVEL.MEDIUM;
  return STRENGTH_LEVEL.HARD;
}