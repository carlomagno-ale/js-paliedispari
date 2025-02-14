/*Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5. Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione). Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione) Dichiariamo chi ha vinto.
*/

// utente sceglie pari/dispari
// utente inserisce un numero da 1 a 5
// PC inserisce un numero randomico da 1 a 5
// sommiamo i due numeri e stabiliamo se è pari o dispari
// dichiaro vincitore

/*
es in classe

function isEvenNumber(numb) {

    if (numb % 2 === 0) {
        return true
    } 

    return false
}

isEvenNumber(userNumber)

if(isEvenNumber(userNumber)){
    console.log('pari')
} else {
    console.log('dispari')
}

*/

const userChoice = prompt('Scegli pari o dispari');
alert(`Hai scelto ${userChoice}`);

//const userNumber = Number(prompt('Scegli un numero da 1 a 5'))
