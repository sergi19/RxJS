import { range } from 'rxjs';
import { tap, map } from 'rxjs/operators';

const numbers$ = range(1,5);

numbers$.pipe(
    tap(val => {
        console.log('before: ', val);
        return 100; //the return doesn't affect anything
    }),
    map(val => val * 10),
    tap({
        next: value => console.log('after: ', value),
        complete: () => console.log('Finished all')
    })
).subscribe(value => console.log('subs', value));