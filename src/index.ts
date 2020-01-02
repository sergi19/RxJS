import { Observable, of, interval, zip, from, combineLatest, merge, concat } from "rxjs";
import { mergeMap, toArray, tap, map, take, mergeAll, pluck, switchMap, delay } from "rxjs/operators";
import { ajax } from "rxjs/ajax";

/* const firstPromise = (param) => {
    return new Promise((resolve, reject) => {
        param === 'sergio' ? 
            resolve(param) :
            reject('Falló la promesa 1')
    })
}

const secondPromise = (param) => {
    return new Promise((resolve, reject) => {
        param === 'ceballos' ? 
            resolve(param) :
            reject('Falló la promesa 2')
    })
}

function showAll() {
    return Promise.all([
        firstPromise('sergio'),
        secondPromise('ceballos')
    ])
    .then(nose => console.log(`${nose[0]} ${nose[1]}`))
    .catch(error => console.log(error))
} */

/* const executeFirstPromise = firstPromise('sergio')
    .then(name => name)
    .catch(name => console.log(name));

const executeSecondPromise = secondPromise('ceballos')
    .then(lastname => lastname)
    .catch(name => console.log(name)); */


/* async function showAll() {
    const one = await executeFirstPromise;
    const two = await executeSecondPromise;
    console.log('firstPromise: ', one);
    console.log('secondPromise: ', two);
} */

// const promises = [];
// function promise(index) {
//     return new Promise( (resolve) => {
//         setTimeout(() => {
//             fetch(`https://reqres.in/api/users/${index}`)
//                 .then(resp => resp.json())
//                 .then(obj => {
//                     resolve(obj.data);
//                 });
//         }, 5000);
//     })
// }

// function getNames() {
//     for (let i = 1; i < 10; i++) {
//         promises.push(promise(i))
//     }
//     return Promise.all(promises);
// }

// async function getAll() {
//     const getNamesPromise = await getNames();
//     const body = document.querySelector('body');
//     getNamesPromise.forEach(element => {
//         body.append(JSON.stringify(element));
//     });
//     console.log(getNamesPromise); 
//     console.log('Todo lo que sigue. Aquí ya iría la lógica para hacer cualquier cosa con la respuesta'); 
// }

// getAll();

const makeRequest$ = from([1,2,3,4,5,6,7,8,9,10]).pipe(
    mergeMap(i => ajax(`https://reqres.in/api/users/${i}`).pipe(
        delay(6000),
        pluck('response', 'data')
    )),
    toArray()
);

makeRequest$.subscribe(console.log);

