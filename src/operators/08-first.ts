import { first, tap, map } from 'rxjs/operators';
import { fromEvent } from 'rxjs';

const click$ = fromEvent<MouseEvent>(document, 'click');

/**
 * first() => The first emision
 * first(condition) => The first emision that fullfil the condition
 */

click$.pipe(
    tap<MouseEvent>(console.log),
    // map(event => ({
    //     clientX: event.clientX,
    //     clientY: event.clientY
    // })),
    map(({clientX, clientY}) => ({clientX, clientY})),
    first(obj => obj.clientY >= 200)
)
.subscribe({
    next: value => console.log('next: ', value),
    complete: () => console.log('complete!!')
})