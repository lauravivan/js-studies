import { it, expect, describe } from 'vitest';
import {
  backDoorPassword,
  backDoorResponse,
  frontDoorPassword,
  frontDoorResponse,
} from './door-policy';
import { getWordCapitalized } from '../utils/utils';

describe('frontDoorResponse()', () => {
  it('should return the first letter of the sentence', () => {
    const sentence = 'Crunchy chewy';

    const result = frontDoorResponse(sentence);

    const expectedResult = sentence.charAt(0);

    expect(result).toBe(expectedResult);
  });
});

describe('frontDoorPassword()', () => {
  it('should return the word capitalized', () => {
    const word = 'candY';

    const result = frontDoorPassword(word);

    const resultExpected = getWordCapitalized(word);

    expect(result).toBe(resultExpected);
  });
});

describe('backDoorResponse()', () => {
  it('should return the last letter of the sentence', () => {
    const sentence = 'Stands so high   ';

    const result = backDoorResponse(sentence);

    let expectedResult = sentence.trim();
    expectedResult = expectedResult.charAt(expectedResult.length - 1);

    expect(result).toBe(expectedResult);
  });
});

describe('backDoorPassword()', () => {
  it('should return the word capitalized with please', () => {
    const word = 'CANDY';

    const result = backDoorPassword(word);

    const resultExpected = getWordCapitalized(word) + ', please';

    expect(result).toBe(resultExpected);
  });
});
