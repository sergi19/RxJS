import { of, from } from "rxjs";

/**
 * of = take arguments y generate a secuence
 * from = create observables based on array, promise, iterable, observables
 */

const observer = {
    next: val => console.log('next: ', val),
    complete: () => console.log('complete!!')
}

// const source$ = of([1,2,3,4,5])
// const source$ = from([1,2,3,4,5]);

// const source$ = from(fetch('https://api.github.com/users/klerith'))

// source$.subscribe(async resp => {
//     const r = await resp.json();
//     console.log(r.company);
// });

const myGenerator = function*() {
    yield 1;
    yield 2;
    yield 3;
    yield 4;
    yield {name: 'Pirri'};
}

const myIterable = myGenerator();
// for (const iterator of myIterable) {
//     console.log('iterator: ', iterator);
// }
from(myIterable).subscribe(observer);
