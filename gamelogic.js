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
  // wanneer 7 x fout is geraden dan isGameLost = true
  //wanneer guesses[i] niet voorkomt in word
  // dan is er verkeerd geraden
  // wanneer guesses[i] wel voorkomt in word
  // dan is er goedgeraden
  // wanneer verkeerd geraden >= 7 dan GameOver
  for(i = 0; i < guesses.length; i++ ){
    const letter = guesses[i];
    if(!word.includes(letter)){
      amountWrongGuesses += 1;
    }
  }
  return amountWrongGuesses >= 7;

}



module.exports = {
  displayWordSoFar: displayWordSoFar,
  isGameWon: isGameWon,
  isGameLost: isGameLost,
};