import { of, from } from 'rxjs';
import { distinct } from 'rxjs/operators';

/* distinct use === so it can emit number or 'number' => 1 || '1' */
const numbers$ = of<number|string>(10,1,2,3,4,1,2,4,'1',5,3,6,10,11,1,'1');

numbers$.pipe(
    distinct()
).subscribe(console.log);

/* distinct with objects */
interface Person {
    name: string;
}

const people: Person[] = [
    { name: 'Matias' },
    { name: 'Sergio' },
    { name: 'Juan' },
    { name: 'George' },
    { name: 'Jorge' },
    { name: 'James' },
    { name: 'Matias' }
];

from(people).pipe(
    distinct(p => p.name)
).subscribe(console.log);
