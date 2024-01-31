const isInputString = (input) => {
  return typeof input === 'string';
};

const getLetter = (sentence, position) => {
  if (!isInputString(sentence)) {
    throw new Error('Sentence: ' + getNotStringReturn());
  }

  const positionConverted = +position;
  if (
    //NaN is not equal to itself
    //+[1,2] === NaN (false)
    //+[1,2] !== NaN (true)
    typeof positionConverted !== 'number' ||
    Number.isNaN(positionConverted)
  ) {
    throw new Error('Position: ' + getNotNumberReturn());
  }

  const cleanedSentence = sentence.trim();
  const letter = cleanedSentence.charAt(positionConverted);

  return letter;
};

const getWordCapitalized = (word) => {
  if (!isInputString(word)) {
    throw new Error(getNotStringReturn());
  }

  const cleanedWord = word.trim();
  if (cleanedWord.match(/\s/g)) {
    throw new Error(getNotValidWord());
  }

  const firstLetter = cleanedWord.charAt(0);
  //first argument: start position
  //omitting the second parameter in slice, will return the rest of the string
  const restOfTheWord = cleanedWord.slice(1);
  return firstLetter.toUpperCase() + restOfTheWord.toLowerCase();
};

const getNotStringReturn = () => {
  return 'Invalid data type, string only.';
};

const getNotNumberReturn = () => {
  return 'Invalid data type, number only.';
};

const getNotValidWord = () => {
  return 'Invalid word structure.';
};

export {
  isInputString,
  getNotStringReturn,
  getNotNumberReturn,
  getLetter,
  getWordCapitalized,
  getNotValidWord,
};
