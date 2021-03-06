// sNACK 4
// Abbiamo un elenco degli studenti di una facoltà, identificati da id, nome e somma totale dei loro voti di esame...
// 1. dobbiamo creare una lista contenente delle targhe (stringhe) con il loro nome in maiuscolo
// ES (marco de iulio => Marco de iulio);
// 2. Dobbiamo creare una lista di tutti gli studenti che hanno un totale di voti superiore a 70
// 3. Dobbiamo creare una lista di tutti gli studenti che hanno un totale di voti superiore a 70 e id superiore a 120


const students = [{
        id: 23,
        nome: 'hashbulla kumbulla',
        totVoti: 300,
    },
    {
        id: 15,
        nome: 'antonio los caanfgelse',
        totVoti: 111,
    },
    {
        id: 21,
        nome: 'walter de Walteris',
        totVoti: 222,
    },
    {
        id: 6,
        nome: 'domenico de vitignis',
        totVoti: 45,
    },
]



// declaring function
function capitalizeStudents(nome) {

    const firstLetter = nome.charAt(0).toUpperCase();
    const otherLetters = nome.substring(1).toLowerCase();
    return firstLetter + otherLetters;
}


// esecution 
const studentsCapitalize = students.map(students => capitalizeStudents(students.nome))
console.log(studentsCapitalize)
const over70 = (array) => {
    const over70 = array.filter((array) => {
        if (array.totVoti > 70) return true;
        else return false;
    });
    return over70;
}


console.log(over70(students));

// esecution 2
const over70Under120 = (array) => {
    const over70Under120 = array.filter((array) => {
        if (array.totVoti >= 70 && array.totVoti <= 120) return true;
        else return false;
    });
    return over70Under120;
}

console.log(over70Under120(students));


// BONUS

const nameStudents = students.map(({ nome }) => {
    const word = nome.split(" ");
    let moreWords = "";
    for (let i = 0; i < word.length; i++) {
        let words =
            word[i].charAt(0).toUpperCase() + word[i].slice(1).toLowerCase();
        moreWords += " " + words;
    }
    return moreWords;
});

console.table(nameStudents)