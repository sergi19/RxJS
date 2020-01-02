import { startWith, endWith } from 'rxjs/operators';
import { of } from 'rxjs';

const numbers$ = of(1,2,3).pipe(
    startWith('a','b','c'),
    endWith('x','y','z')
);

numbers$.subscribe(console.log)

