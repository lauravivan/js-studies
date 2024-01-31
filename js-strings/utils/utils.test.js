import { describe, it, expect } from 'vitest';
import { isInputString, getLetter, getWordCapitalized } from './utils';

describe('isInputString()', () => {
  it('should return false if input is not of type string', () => {
    const input = [1, 2];
    const input2 = { name: 'Flora', age: 23 };
    const input3 = 3;
    const input4 = true;

    const result = isInputString(input);
    const result2 = isInputString(input2);
    const result3 = isInputString(input3);
    const result4 = isInputString(input4);

    expect(result).toBeFalsy();
    expect(result2).toBeFalsy();
    expect(result3).toBeFalsy();
    expect(result4).toBeFalsy();
  });
});

describe('getLetter()', () => {
  it('should return a letter', () => {
    const sentence = 'Tenacious and terrifying';

    const result = getLetter(sentence, 0);

    const expectedResult = sentence.charAt(0);

    expect(result).toBe(expectedResult);
  });

  it('should return a letter if sentence has spaces before', () => {
    const sentence = '    Tenacious and terrifying';

    const result = getLetter(sentence, 0);
    const expectedResult = sentence.trim().charAt(0);

    expect(result).toBe(expectedResult);
  });

  it('should return a letter if sentence has spaces after', () => {
    const sentence = 'Tenacious and terrifying     ';

    let result = sentence.trim();
    result = getLetter(sentence, result.length - 1);
    let expectedResult = sentence.trim();
    expectedResult = expectedResult.charAt(expectedResult.length - 1);

    expect(result).toBe(expectedResult);
  });

  it('should throw an error if sentence is invalid', () => {
    const input = [1, 2];
    const input2 = { name: 'Flora', age: 23 };
    const input3 = 3;
    const input4 = true;

    const result = () => {
      getLetter(input, 0);
    };
    const result2 = () => {
      getLetter(input2, 0);
    };
    const result3 = () => {
      getLetter(input3, 0);
    };
    const result4 = () => {
      getLetter(input4, 0);
    };

    expect(result).toThrowError();
    expect(result2).toThrowError();
    expect(result3).toThrowError();
    expect(result4).toThrowError();
  });

  it('should throw an error if position is invalid', () => {
    const position = [1, 2];
    const position2 = { name: 'Flora', age: 23 };
    const position3 = 'Hello';
    const position4 = NaN;

    const result = () => {
      getLetter('Hello world', position);
    };
    const result2 = () => {
      getLetter('Hello world', position2);
    };
    const result3 = () => {
      getLetter('Hello world', position3);
    };
    const result4 = () => {
      getLetter('Hello world', position4);
    };

    expect(result).toThrowError();
    expect(result2).toThrowError();
    expect(result3).toThrowError();
    expect(result4).toThrowError();
  });

  it('should not throw an error if position converted is a valid number', () => {
    const position = '1';
    const position2 = true;

    const result = () => {
      getLetter('Hello world', position);
    };

    const result2 = () => {
      getLetter('Hello world', position2);
    };

    expect(result).not.toThrowError();
    expect(result2).not.toThrowError();
  });
});

describe('getWordCapitalized()', () => {
  it('should return the word given capitalized', () => {
    const word = 'candy';

    const result = getWordCapitalized(word);

    const firstLetter = word.charAt(0);
    const restOfTheWord = word.slice(1);

    const expectedResult =
      firstLetter.toUpperCase() + restOfTheWord.toLowerCase();

    expect(result).toBe(expectedResult);
  });

  it('should return the word given capitalized if it has spaces before', () => {
    const word = '    candy';

    const result = getWordCapitalized(word);
    const wordCleaned = word.trim();
    const firstLetter = wordCleaned.charAt(0);
    const restOfTheWord = wordCleaned.slice(1);
    const expectedResult =
      firstLetter.toUpperCase() + restOfTheWord.toLowerCase();

    expect(result).toBe(expectedResult);
  });

  it('should return the word given capitalized if it has spaces after', () => {
    const word = 'candy     ';

    const result = getWordCapitalized(word);
    const wordCleaned = word.trim();
    const firstLetter = wordCleaned.charAt(0);
    const restOfTheWord = wordCleaned.slice(1);
    const expectedResult =
      firstLetter.toUpperCase() + restOfTheWord.toLowerCase();

    expect(result).toBe(expectedResult);
  });

  it('should return the word given capitalized if input is not lowercase', () => {
    const word = 'cANDY';
    const word2 = 'CANDY';
    const word3 = 'cAnDy';
    const word4 = 'Candy';

    const result = getWordCapitalized(word);
    const firstLetter = word.charAt(0);
    const restOfTheWord = word.slice(1);
    const expectedResult =
      firstLetter.toUpperCase() + restOfTheWord.toLowerCase();

    const result2 = getWordCapitalized(word2);
    const firstLetter2 = word2.charAt(0);
    const restOfTheWord2 = word2.slice(1);
    const expectedResult2 =
      firstLetter2.toUpperCase() + restOfTheWord2.toLowerCase();

    const result3 = getWordCapitalized(word3);
    const firstLetter3 = word3.charAt(0);
    const restOfTheWord3 = word3.slice(1);
    const expectedResult3 =
      firstLetter3.toUpperCase() + restOfTheWord3.toLowerCase();

    const result4 = getWordCapitalized(word4);
    const firstLetter4 = word4.charAt(0);
    const restOfTheWord4 = word4.slice(1);
    const expectedResult4 =
      firstLetter4.toUpperCase() + restOfTheWord4.toLowerCase();

    expect(result).toBe(expectedResult);
    expect(result2).toBe(expectedResult2);
    expect(result3).toBe(expectedResult3);
    expect(result4).toBe(expectedResult4);
  });

  it('should throw an error if word not of type string', () => {
    const word = [1, 2];
    const word2 = { name: 'Flora', age: 23 };
    const word3 = 3;
    const word4 = true;

    const result = () => {
      getWordCapitalized(word);
    };
    const result2 = () => {
      getWordCapitalized(word2);
    };
    const result3 = () => {
      getWordCapitalized(word3);
    };
    const result4 = () => {
      getWordCapitalized(word4);
    };

    expect(result).toThrowError();
    expect(result2).toThrowError();
    expect(result3).toThrowError();
    expect(result4).toThrowError();
  });

  it('should throw an error if input not a word', () => {
    const word = 'This is a word';

    const result = () => {
      getWordCapitalized(word);
    };

    expect(result).toThrowError();
  });
});
