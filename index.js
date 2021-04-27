const { question } = require("readline-sync");
const { displayWordSoFar, isGameWon, isGameLost, counterWronglyGuessed } = require("./gamelogic");

function game(word, guesses) {
  console.log(
      `Dit heb je tot nu toe geraden: ${guesses}
      ${displayWordSoFar(word,guesses)}`);
  console.log(counterWronglyGuessed(word,guesses));
      

  // console.log("Dit heb je tot nu toe geraden: ", guesses);
  // console.log(displayWordSoFar(word, guesses));
  // console.log("Aantal keer fout geraden: ", counterWronglyGuessed(word, guesses));

  const letter = question("Raad een letter: ").toLowerCase();

  const letterInput = letter.split("");

  // voeg de geraden letter toe aan de array met guesses
  if(letterInput.length === 1){
    guesses.push(letter);
  }
  else {
    console.log("Voer niet meer dan 1 letter in.")
  }


  //check of alle woorden geraden
  //console.log : gefeliciteerd, je hebt gewonnen
  //if statement is GameWon
  //true: console.log je hebt gewonnen
  //return om spel te beeindigen
  if(isGameWon(word, guesses)) {
    console.log("Nice! Je hebt het juiste woord geraden :-)");
    return;
  }
  if(isGameLost(word, guesses)){
    console.log("GAME-OVER");
    return;
  }





  // 7 letters fout geraden? dan game over
  // if statement isGameLost
  // true: consolelog Game OVer
  // return om spel te beëindigen

  // volgende ronde! we roepen game nog een keer aan
  game(word, guesses);
}

console.log(`
__________  
| /     |    ░██████╗░░█████╗░██╗░░░░░░██████╗░░░░░░██╗███████╗
|/     _o_   ██╔════╝░██╔══██╗██║░░░░░██╔════╝░░░░░░██║██╔════╝
|       O    ██║░░██╗░███████║██║░░░░░██║░░██╗░░░░░░██║█████╗░░
|      / \\   ██║░░╚██╗██╔══██║██║░░░░░██║░░╚██╗██╗░░██║██╔══╝░░
|            ╚██████╔╝██║░░██║███████╗╚██████╔╝╚█████╔╝███████╗
===========  ░╚═════╝░╚═╝░░╚═╝╚══════╝░╚═════╝░░╚════╝░╚══════╝
`);

game("javascript", []);