/*Palidroma
Chiedere all’utente di inserire una parola Creare una funzione per capire se la parola inserita è palindroma*/

/*
//utente inserisce la parola

const userWord = prompt('Inserici una parola palidroma [es. osso, oro, afa, radar ...]');

//dividiamo la parola in lettere 

let singleLetters = userWord.toLowerCase.split('');
console.log(singleLetters);

//identificare le lettere che formano la parola e leggerla al contrario

singleLetters = singleLetters.reverse();

const inverseWord = singleLetters.join('');

console.log(singleLetters)
console.log(inverseWord)

//controllare che le due parole siano identiche

if (userWord === inverseWord){
    console.log('palidroma')
} else {
    console.log('no')
}
*/

// creare la funzione per leggere al contrario


let userWord = prompt('Inserici una parola palidroma [es. osso, oro, afa, radar ...]');

function isPalidroma(word){

    const lowerWord = word.toLowerCase();
    const inverseWord = word.split('').reverse().join('').toLowerCase();

    if(lowerWord === inverseWord) {
        return true
    } 

    return false
  }

if (isPalidroma(userWord)){
    console.log(`${userWord} è una parola palidroma`)
} else {
    console.log(`${userWord} NON è una parola palidroma`)
}



