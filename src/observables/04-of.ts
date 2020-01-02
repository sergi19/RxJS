import { of, Observable } from 'rxjs';

let numeros: number[] = [];
let resultado = [];
// let obs$ = null;
// const obs$ = of(1,2,3,4,5,6);
// const obs$ = of(true, {a: 1, b: 2, c: false}, Promise.reject(true))
// const obs$ = of(...[1,2,3,4,5,6]);
for (let i = 0; i < 10; i++) {
    numeros.push(i)
}

const obs$ = of(numeros);
console.log('Inicio del observable => ', resultado);
obs$.subscribe(
    next => {
        console.log('Agregando números...');
        resultado = next;
    },
    null,
    () => console.log('Terminamos la secuencia')
);
console.log('Fin del observable => ', resultado);
