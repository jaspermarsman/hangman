// check of er slechts 1 letter als input wordt gedaan
// input (letter -> splitsen naar array
// alls de array.length === 1 dan pas guesses.push(letter)

// function checkLetterInput(letter){
//   const letterInput = letter.split("");
//   return letterInput.index === 1;
//
// }


function displayWordSoFar(word, guesses) {
  let guessedWord = "";

  for (let i = 0; i < word.length; i++) {
    //newWord = newWord + "_ " ;
    //variabele met letter
    const letter = word[i];
    //zit die in de guesses array?
    //zo ja: toevoegen aan string
    if (guesses.includes(letter)) {
      guessedWord += letter + " ";
    }
    //zo nee: _ toevoegen
    else {
      guessedWord += '_ '
    }

    //console.log(newWord);
  }
return guessedWord;
}


function isGameWon(word, guesses) {
  let word2 = "";
  for(i = 0; i < word.length; i++){
    word2 = word2 + word[i] + " ";
  }
  return word2 === displayWordSoFar(word, guesses);

}

function isGameLost(word, guesses) {
  let amountWrongGuesses = 0;

  for(i = 0; i < guesses.length; i++ ){
    const letter = guesses[i];
    if(!word.includes(letter)){
      amountWrongGuesses += 1;
    }
  }
  return amountWrongGuesses >= 7;

}

function counterWronglyGuessed(word, guesses){
  let amountWrongGuessed = 0;
  const zeroWrong =
      '\n' +
      '\n' +
      '\n' +
      '\n' +
      '\n' +
      '===========';
  const oneWrong =
      '|\n' +
      '|\n' +
      '|\n' +
      '|\n' +
      '|\n' +
      '===========';

  const twoWrong =
 `__________
  |      
  |      
  |       
  |       
  |
 ===========`;

  const threeWrong =
 `__________
  | /     
  |/      
  |       
  |       
  |
 ===========`;

  const fourWrong =
 `__________
  | /     |
  |/      
  |       
  |       
  |
 ===========`;

  const fiveWrong =
 `__________
  | /     |
  |/      o
  |       O
  |       
  |
 ===========`;

  const sixWrong =
 `__________
  | /     |
  |/     _o_
  |       O
  |       
  |
 ===========`;


  const sevenWrong =
 `__________
  | /     |
  |/     _o_
  |       O
  |      / \
  |
 ===========`;


  for(i = 0; i < guesses.length; i++ ){
    const letter = guesses[i];
    if(!word.includes(letter)){
      amountWrongGuessed += 1;
    }
  }

  switch (amountWrongGuessed) {
    case 0:

    case undefined:
      return zeroWrong;
      break;
    case 0:
      return zeroWrong;
      break;
    case 1:
      return oneWrong;
      break;
    case 2:
      return twoWrong;
      break;
    case 3:
      return threeWrong;
       break;
    case 4:
      return fourWrong;
      break;
    case 5:
      return fiveWrong;
      break;
    case 6:
      return sixWrong;
      break;
    case 7:
      return sevenWrong;
      break;

  }
}


module.exports = {
  displayWordSoFar: displayWordSoFar,
  isGameWon: isGameWon,
  isGameLost: isGameLost,
  counterWronglyGuessed: counterWronglyGuessed,

};