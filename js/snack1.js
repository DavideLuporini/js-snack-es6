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

console.log
for (i = 0; i < bici.length; i++) {
    const { peso } = bici[i];
    // eseguo un controllo sul peso , per adesso metto 1 , come posso fare per confrontare ogni giro se il numero è maggiore o minore di quello precedente?
    if (peso < 1) {
        console.log(peso)
    }

}