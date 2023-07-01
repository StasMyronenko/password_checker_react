import { digitRegExp, letterRegExp, symbolRegExp } from '../regularExpressions/regularExpressions';

export const isLettersInText = (text: string): boolean => {
  return letterRegExp.test(text)
}

export const isDigitInText = (text: string): boolean => {
  return digitRegExp.test(text)
}


export const isSymbolInText = (text: string): boolean => {
  return symbolRegExp.test(text)
}