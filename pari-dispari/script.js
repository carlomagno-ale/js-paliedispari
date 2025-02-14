/*Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5. Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione). Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione) Dichiariamo chi ha vinto.
*/

const userChoice = prompt('Scegli pari o dispari');
alert(`Hai scelto ${userChoice}`);

const userNumber = Number(prompt('Scegli un numero da 1 a 5'));
alert(`Hai scelto ${userNumber}`);

const machineNumber = Math.floor(Math.random() * 5) + 1;
alert(`L'avversario ha scelto ${machineNumber}`);

function isEvenNumber(userNumb, machineNumb) {
    const sum = userNumb + machineNumb;
    const isEven = sum % 2 === 0;

    if (isEven) {
        return true
    } 

    return false
}

isEvenNumber(userNumber, machineNumber)

if (isEvenNumber(userNumber, machineNumber) === true && userChoice === 'pari') {
    alert('Hai vinto!')
} else if (isEvenNumber(userNumber, machineNumber) === false && userChoice === 'dispari'){
    alert('Hai vinto!')
} else {
    alert('Hai perso')
}