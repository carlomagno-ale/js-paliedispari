/*Palidroma
Chiedere all’utente di inserire una parola Creare una funzione per capire se la parola inserita è palindroma*/

// utente inserisce la parola
// dividiamo la parola in lettere 
// identificare le lettere che formano la parola e leggerla al contrario
// controllare che le due parole siano identiche
// ! rendere gli uppercase identici durante il controllo


const userWord = prompt('Inserici una parola palidroma [es. osso, oro, afa, radar ...]');

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



