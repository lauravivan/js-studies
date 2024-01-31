import { getLetter, getWordCapitalized } from '../utils/utils';

/**
 * Respond with the correct character, given the line of the
 * poem, if this were said at the front door.
 *
 * @param {string} sentence a phrase of an acrostic poem
 * @returns {string} the front door response
 */
const frontDoorResponse = (sentence) => {
  try {
    return getLetter(sentence, 0);
  } catch (err) {
    throw new Error(err.message);
  }
};

/**
 * Format the password for the front-door, given the response
 * letters.
 *
 * @param {string} word the letters you responded with before
 * @returns {string} the front door password
 */
const frontDoorPassword = (word) => {
  try {
    return getWordCapitalized(word);
  } catch (err) {
    throw new Error(err.message);
  }
};

/**
 * Respond with the correct character, given the line of the
 * poem, if this were said at the back door.
 *
 * @param {string} sentence a phrase of an acrostic poem
 * @returns {string} the back door response
 */
const backDoorResponse = (sentence) => {
  try {
    const cleanedSentence = sentence.trim();
    return getLetter(sentence, cleanedSentence.length - 1);
  } catch (err) {
    throw new Error(err.message);
  }
};

/**
 * Format the password for the back door, given the response
 * letters.
 *
 * @param {string} word the letters you responded with before
 * @returns {string} the back door password
 */
const backDoorPassword = (word) => {
  try {
    const wordCapitalized = getWordCapitalized(word);
    const sentence = `${wordCapitalized}, please`;
    return sentence;
  } catch (err) {
    throw new Error(err.message);
  }
};

export {
  frontDoorPassword,
  frontDoorResponse,
  backDoorPassword,
  backDoorResponse,
};
