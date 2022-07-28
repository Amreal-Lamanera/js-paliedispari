// chiedo all'utente una parola
const urWord = prompt("Inserisci una parola o una frase palindroma");
let result = "Parola/frase non palindroma!"

if (urWord === null) {
    console.warn("Non hai inserito una parola - ricarica la pagina per riprovare");
} else {
    // creo un array di lettere dalla parola
    let myArray = urWord.split("");
    console.log(myArray);

    // rimuovo gli spazi (se presenti)
    myArray = myArray.filter(element => {
        return element !== " ";
    });
    console.log(myArray);

    // chiamo funzione che controlla la palindromia
    if (isPalindrome(myArray)) {
        result = "Parola/frase palindroma!";
    }
    console.log(result);
}

/***********************
    FUNCTIONS
***********************/

// funzione per invertire un array
function invertArray(list) {
    const newArray = [];
    for (let i = list.length - 1; i >= 0; i--) {
        newArray.push(list[i]);
    }
    return newArray
}

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

    return myArrayReverse.join(',') === list.join(',')

}