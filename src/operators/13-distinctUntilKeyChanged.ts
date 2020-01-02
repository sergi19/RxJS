import { of, from } from 'rxjs';
import { distinctUntilChanged, distinctUntilKeyChanged } from 'rxjs/operators';

/**
 * distinctUntilKeyChanged is same than distinctUntilChanged, only with the diference
 * that you must pass a key of the objects of array
 */

interface Person {
    name: string;
    lastname: string;
}

const people: Person[] = [
    { name: 'Matias', lastname: 'Ceballos' },
    { name: 'Matias', lastname: 'Pérez' },
    { name: 'Sergio', lastname: 'Díaz' },
    { name: 'Juan', lastname: 'Díaz' },
    { name: 'George', lastname: 'Ceballos' },
    { name: 'George', lastname: 'Ceballos' },
    { name: 'Jorge', lastname: 'Ceballos' },
    { name: 'James', lastname: 'Ceballos' },
    { name: 'Matias', lastname: 'Ceballos' }
];

// from(people).pipe(
//     distinctUntilChanged((previous, actual) => previous.name === actual.name)
// ).subscribe(console.log);

from(people).pipe(
    distinctUntilKeyChanged('lastname')
).subscribe(console.log);

