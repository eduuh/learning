let fst: (a: any, b: any) => any = (a, b) => a

let fst2: <T,U>(a: T, b: U) => T = (a,b) =>a;

console.log(fst2(2,2))
