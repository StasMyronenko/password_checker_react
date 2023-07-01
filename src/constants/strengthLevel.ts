export enum STRENGTH_LEVEL {
  EMPTY = 'empty',
  SHORT = 'short',
  EASY = 'easy',
  MEDIUM = 'medium',
  HARD = 'hard'
}

export const findLetterReqExp = new RegExp(/[A-Za-z]/);
export const findDigitReqExp = new RegExp(/\d/);
export const findSymbolReqExp = new RegExp(/[^\dA-Za-z]/);

export const isLettersInText = (text: string): boolean => {
  return findLetterReqExp.test(text)
}

export const isDigitInText = (text: string): boolean => {
  return findDigitReqExp.test(text)
}


export const isSymbolInText = (text: string): boolean => {
  return findSymbolReqExp.test(text)
}
