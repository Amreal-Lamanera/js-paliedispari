// chiedo all'utente a quale gioco vuole giocare
const wichGame = parseInt(prompt("Inserisci 1 per il gioco sulle parole palindrome, 2 per pari e dispari"));

if (wichGame === 1) {

    /************************************************************************
        TODO: GIOCO 1
    ************************************************************************/
    // chiedo all'utente una parola
    const urWord = prompt("Inserisci una parola o una frase palindroma").toUpperCase();
    let result = "Parola/frase non palindroma!"

    if (urWord === null) {
        console.warn("Non hai inserito una parola - ricarica la pagina per riprovare");
    } else {
        // creo un array di lettere dalla parola
        let myArray = urWord.split("");
        // console.log(myArray);

        // rimuovo gli spazi (se presenti)
        myArray = myArray.filter(element => {
            return element !== " ";
        });
        // console.log(myArray);

        // chiamo funzione che controlla la palindromia
        if (isPalindrome(myArray)) {
            result = "Parola/frase palindroma!";
        }
        console.log(result);

    }
} else if (wichGame === 2) {

    /************************************************************************
        TODO: GIOCO 2
    ************************************************************************/
    const evenOdd = prompt('Scegli "pari" o "dispari" scrivendolo qua sotto').toUpperCase();
    // console.log(evenOdd);
    if (evenOdd !== "PARI" && evenOdd !== "DISPASRI") {
        console.warn("Scelta non valida - ricarica la pagina per riprovare");
    } else {
        // creo una variabile urChoice con valore false => corrisponderà alla scelta dispari
        let urChoice = false;
        if (evenOdd === "PARI") {
            // se la scelta è pari assegno a urChoice true
            urChoice = true;
        }
        // utente sceglie un numero
        const urNum = parseInt(prompt("Inserisci un numero fra 1 e 5"));
        if (!isNaN(urNum)) {
            if (urNum > 0 && urNum < 6) {
                // genero un numero casuale per il pc
                const myNum = getRandomIntBetween(1, 5);
                console.log("IL TUO NUMERO: ", urNum, "IL MIO NUMERO: ", myNum);
                const sum = myNum + urNum;
                let result = "Hai perso!";
                // Utilizzo uno XOR negato (vero se entrambe vere o entrambe false)
                // => se è pari e hai scelto pari
                // => se è dispari e hai scelto dispari
                // con pari = true
                if (!(isEven(sum) ^ urChoice)) {
                    result = "Hai vinto!";
                }
                console.log(result);
            } else {
                console.warn("Numero inserito non corretto - ricarica la pagina per riprovare");
            }
        } else {
            console.warn("Numero inserito non corretto - ricarica la pagina per riprovare");
        }
    }

} else {
    alert("Valore non corretto - ricarica la pagina per riprovare")
}

/*************************************************************
    FUNCTIONS
*************************************************************/

// funzione per invertire un array
function invertArray(list) {
    const newArray = list.reverse();
    // for (let i = list.length - 1; i >= 0; i--) {
    //     newArray.push(list[i]);
    // }
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
    return myArrayReverse.join('') === list.join('')
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