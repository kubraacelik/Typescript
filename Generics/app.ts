//*random şekilde sayı
// function getRandomNumber(items : number[]):number{
//     let randomIndex =Math.floor(Math.random()*items.length);
//     return items[randomIndex];
// }

// let numbers = [27, 67, 34, 84, 33];
// console.log(getRandomNumber(numbers));


//*random şekilde isim
// function getRandomString(items: string[]) : string{
//     let randomIndex = Math.floor(Math.random()*items.length);
//     return items[randomIndex];
// }

// let names = ["Beren", "Cem", "Selin", "Burak"];
// console.log(getRandomString(names));

//!İkisinin birleşimini Generics yardımıyla daha kolay şeklinde yazalım
function getRandomElement<T>(items: T[]): T{
    let randomIndex = Math.floor(Math.random()*items.length);
    return items[randomIndex]
}
let numbers = [27, 67, 34, 84, 33];
let names = ["Beren", "Cem", "Selin", "Burak"];

console.log(getRandomElement(numbers));
console.log(getRandomElement(names));

