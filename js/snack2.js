// Snack2
// Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
// Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
// Generare numeri random al posto degli 0 nelle proprietà:
// Punti fatti e falli subiti.
// Infine usando la destrutturazione creiamo un nuovo array i cui elementi 
// contengono solo nomi e falli subiti e stampiamo tutto in console.

// creare un array di oggetti di squadre con nome, punti fatti, falli subiti

// array 1
const nordTeams = [{
        name: 'Ac milan',
        points: 0,
        fouls: 0,

    },
    {
        name: 'Inter',
        points: 0,
        fouls: 0,

    },
    {
        name: 'Juventus',
        points: 0,
        fouls: 0,

    },
]

// array 2
const sudTeams = [{
        name: 'Napoli',
        points: 0,
        fouls: 0,

    },
    {
        name: 'Roma',
        points: 0,
        fouls: 0,

    },
    {
        name: 'Lazio',
        points: 0,
        fouls: 0,

    },
]


// 2) spargo gli elementi dell'array in un terzo array
const serieA = [...nordTeams, ...sudTeams];
console.table(serieA)

// 3) creo un array per le statistiche
const statistics = [];
console.table(statistics);

// 4) creo una funzione random
const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

// 5) eseguo un ciclo per le statistiche
for (let i = 0; i < serieA.length; i++) {
    let { name, fouls } = serieA[i];
    fouls = getRandomNumber(1, 100);

    statistics.push({ name, fouls });
}

console.table(statistics);


// non avevo capito che fosse un'array di oggetti , aveo fatto un array , corretto adesso