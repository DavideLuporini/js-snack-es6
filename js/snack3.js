// SNACK 3
// Scrivere una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b).
// La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri.
// Usiamo i nuovi metodi degli array visti oggi in classe.

// funzione random
const numbersBetween = (array, x, y) => {
    const numBetween = [];
    for (let i = x; i <= y; i++) {
        numBetween.push(array[i]);
    }
    return numBetween;
}
const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
// Elementi da utilizzare
const array = ['io', 'tu', 'loro', 'acqua', 45, 67, 4];
const min = getRandomNumber(0, 2);
const max = getRandomNumber(4, 6);

console.log(`i valori sono compresi fra la posizione ${min} e la posizione ${max}`)


// scrivo la funzione
// esecuzione

// richiamo la funzione
const numBetween = numbersBetween(array, min, max);
console.log(numBetween);