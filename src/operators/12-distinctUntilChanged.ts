import { of, from } from 'rxjs';
import { distinctUntilChanged } from 'rxjs/operators';

/* distinctUntilChanged only emits one observable if there are two consecutive equals observables */
const numbers$ = of<number|string>(1,'1',1,1,2,2,3,3);

numbers$.pipe(
    distinctUntilChanged()
).subscribe(console.log);

/** 
 * distinctUntilChanged with objects must pass a condition, if true then the observable 
 * only emits one observable if there are two consecutive equals observables 
*/
interface Person {
    name: string;
}

const people: Person[] = [
    { name: 'Matias' },
    { name: 'Matias' },
    { name: 'Sergio' },
    { name: 'Juan' },
    { name: 'George' },
    { name: 'George' },
    { name: 'Jorge' },
    { name: 'James' },
    { name: 'Matias' }
];

from(people).pipe(
    distinctUntilChanged((previous, actual) => previous.name === actual.name)
).subscribe(console.log);
