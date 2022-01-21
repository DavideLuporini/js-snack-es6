// SNACK 3
// Scrivere una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b).
// La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri.
// Usiamo i nuovi metodi degli array visti oggi in classe.

// funzione per prendere i numeri in posizione in un certo intervallo
const numbersBetween = (array, x, y) => {
    const numBetween = array.filter((item, i) => {

        if (x > y) {

            if (i >= x && i <= y) {
                return true;
            }
            return false;
        }
        if (y > x) {

            if (i >= y && i <= x) {
                return true;
            }
            return false;
        }
    });
    return numBetween;
}


// funzione random
const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
// Elementi da utilizzare
const array = ['io', 'tu', 'loro', 'acqua', 45, 67, 4];
const min = getRandomNumber(0, 7);
const max = getRandomNumber(0, 7);

console.log(`i valori sono compresi fra la posizione ${min} e la posizione ${max}`)


// scrivo la funzione
// esecuzione

// richiamo la funzione
const numBetween = numbersBetween(array, min, max);
console.log(numBetween);