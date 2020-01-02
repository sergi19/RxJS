import { from } from 'rxjs';
import { reduce, scan, map } from 'rxjs/operators';

const numbers = [1,2,3,4,5];

// The return is only one value, the total accumulate
from(numbers).pipe(
    reduce((acc, cur) => acc + cur)
).subscribe(console.log);

// The return are many values, each accumulate
from(numbers).pipe(
    scan((acc, cur) => acc + cur)
).subscribe(console.log);

// Scan is the redux pattern base
interface User {
    id?: string;
    authenticated?: boolean;
    name?: string;
    token?: string;
    age?: number;
}

const users: User[] = [
    {id: 'sergi19', authenticated: true, name: 'Sergio', token: 'axysdzd098'},
    {id: 'sergi19', authenticated: false, name: 'Antonio', token: 'axysdzd098'},
    {id: 'sergi19', authenticated: false, name: 'Felipe', token: 'axysdzd098'},
];

from(users).pipe(
    scan<User>((acc, cur) => {
        return {...acc, ...cur}
    }, {age: 33}),
    map(state => state.id)
).subscribe(user => {
    console.log(user)
})

/* ---------------------------------------- */

const state$ = from(users).pipe(
    scan<User>((acc, cur) => {
        return {...acc, ...cur}
    }, {age: 33}),
);
    
const id$ = state$.pipe(
    map(state => state.id)
);

id$.subscribe(user => {
    console.log(user)
})