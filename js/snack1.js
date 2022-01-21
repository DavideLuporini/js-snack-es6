console.log('js ok')

// Snack 1
// Creare un array di oggetti:
// Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
// Stampare ain console la bici con peso minore utilizzando destructuring e template literal

const bici = [{
        nome: 'speedy',
        peso: 1.8,

    },
    {
        nome: 'flame',
        peso: 1.2,

    },
    {
        nome: 'premium flame',
        peso: 0.5,

    },
]
const { peso } = bici;

let pesi = []


console.log
for (i = 0; i < bici.length; i++) {
    const { peso } = bici[i];
    pesi.push(peso)

}
console.log(pesi)

function minNum(array) {
    return Math.min(...array);
}
let pesoMinimo = minNum(pesi);
console.log(pesoMinimo)


// function minNum(array) {
//     return Math.min(array);
// }
// let pesoMinimo = minNum(...pesi);
// console.log(pesoMinimo)