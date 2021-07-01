type One = {p: string}

interface Two {
   p:string;
}

let x: One = {p : 'Hi'}
console.log(x)

let two: Two = x;
// string, array and function have build-in predicates

let s: string = "edwin"
let n: number = 32;

console.log(typeof s)
console.log(typeof n)

