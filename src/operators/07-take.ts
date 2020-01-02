import { take, tap } from 'rxjs/operators';
import { of } from 'rxjs';

/**
 * Operator take cancel all observables related to each other
 */

const numbers$ = of(1,2,3,4,5).pipe(tap(console.log));

numbers$.pipe(
    tap(console.log),
    take(3)
)
.subscribe({
    next: value => console.log('next: ', value),
    complete: () => console.log('complete!!')
})