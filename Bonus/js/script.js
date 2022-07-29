// chiedo all'utente a quale gioco vuole giocare
// const wichGame = parseInt(prompt("Inserisci 1 per il gioco sulle parole palindrome, 2 per pari e dispari"));

/************************************************************************
    TODO: GIOCO 1
************************************************************************/

// Recupero input della parola dal DOM
const urWordElement = document.getElementById("urWorld");
// console.log(urWordElement);
// Recupero dove stampare risultato dal DOM
const resultG1Element = document.getElementById("resultG1");

// Recupero dove stampare la parola invertita dal DOM
const urWorldRevElement = document.getElementById("urWorldRev");

const palSubBtnElement = document.getElementById("palSubBtn");

palSubBtnElement.addEventListener('click', palGame);

function palGame() {

    // Imposto valore di default a resultG1
    let resultG1 = "Parola/frase non palindroma!";
    resultG1Element.classList.remove('text-success');
    resultG1Element.classList.add('text-danger');

    if (urWordElement.value === "") {

        resultG1Element.innerHTML = "Non hai inserito una parola";
    } else {
        // creo un array di lettere dalla parola
        let myArray = urWordElement.value.toUpperCase().split("");

        // rimuovo gli spazi (se presenti)
        myArray = myArray.filter(element => {
            return element !== " ";
        });

        // chiamo funzione che controlla la palindromia
        // if (isPalindrome(myArray)) {
        //     result = "Parola/frase palindroma!";
        // }
        // console.log(result);

        // ALTERNATIVA - SENZA FUNZIONI
        // creo un array di lettere dalla parola
        let myArrayReverse = urWordElement.value.toUpperCase().split("").reverse();
        // console.log(myArrayReverse);
        // console.log(myArrayReverse.join(''));


        urWorldRevElement.value = myArrayReverse.join('');

        // rimuovo gli spazi (se presenti)
        myArrayReverse = myArrayReverse.filter(element => {
            return element !== " ";
        });

        if (myArrayReverse.join('') === myArray.join('')) {
            resultG1Element.classList.add('text-success');
            resultG1Element.classList.remove('text-danger');
            resultG1 = "Parola/frase palindroma!";
        }

        resultG1Element.innerHTML = resultG1;

    }
}

/************************************************************************
    TODO: GIOCO 2
************************************************************************/
// Recupero input pari o dispari
const evenOddElement = document.getElementById("evenOdd");

// Recupero input il tuo numero
const urNumElement = document.getElementById("urNum");

// console.log(urWordElement);
// Recupero dove stampare risultato dal DOM
const resultG2Element = document.getElementById("resultG2");

// Recupero dove stampare il numero casuale
const myNumElement = document.getElementById("myNum");

const evOdGameBtnElement = document.getElementById("evOdGameBtn");
// console.log(evOdGameBtnElement);

evOdGameBtnElement.addEventListener('click', evOdGame);

function evOdGame() {

    // Imposto valore di default a resultG2
    let resultG2 = "Hai perso!";
    resultG2Element.classList.remove('text-success');
    resultG2Element.classList.add('text-danger');

    // creo una variabile urChoice con valore false => corrisponderà alla scelta dispari
    let urChoice = parseInt(evenOddElement.value);

    // utente sceglie un numero
    const urNum = parseInt(urNumElement.value);

    // genero un numero casuale per il pc
    const myNum = getRandomIntBetween(1, 5);
    // lo metto nel DOM
    myNumElement.value = myNum;

    // sommo i due numeri
    const sum = myNum + urNum;
    // console.log(sum);
    // console.log(isEven(sum));
    // console.log(urChoice);
    // console.log(!(isEven(sum) ^ urChoice));

    // Utilizzo uno XOR negato (vero se entrambe vere o entrambe false)
    // => se è pari e hai scelto pari
    // => se è dispari e hai scelto dispari
    // con pari = true
    if (!(isEven(sum) ^ urChoice)) {
        resultG2Element.classList.add('text-success');
        resultG2Element.classList.remove('text-danger');
        resultG2 = "Hai vinto!";
    }
    resultG2Element.innerHTML = resultG2;
}


/*************************************************************
    FUNCTIONS
*************************************************************/

// funzione per invertire un array
function invertArray(list) {
    const newArray = [];
    for (let i = list.length - 1; i >= 0; i--) {
        newArray.push(list[i]);
    }
    return newArray
}

// funzione che restituisce true se l'array è palindromo, false altrimenti
function isPalindrome(list) {
    // creo un array identico, ma invertito
    const myArrayReverse = invertArray(list);
    // let palOk = true;
    //confronto elementi dell'array 1 a 1
    // for (let i = 0; i < list.length; i++) {
    //     if (list[i] !== myArrayReverse[i]) {
    //         palOk = false;
    //     }
    // }
    // return palOk;

    // ALTERNATIVA

    // Trasformo gli array in stringhe e controllo se sono uguali, ritorno il valore del confronto
    return myArrayReverse.join(',') === list.join(',')
}

// funzione che genera un numero casuale da min a max
function getRandomIntBetween(min, max) {
    const n = Math.floor(Math.random() * (max - min + 1)) + min;
    if (isNaN(min) || isNaN(max)) {
        console.warn("ERRORE - hai inserito dei dati non numerici");
        return;
    }
    if (min > max) {
        console.warn("ERRORE - minimo è più grande di massimo");
        return;
    }
    return n;
}

// funzione che restituisce true se il numero è pari, false altrimenti
function isEven(num) {
    if (typeof num !== 'number' || isNaN(num)) {
        console.warn('not a number');
        return;
    }
    return num % 2 === 0;
}