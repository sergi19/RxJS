import { of, interval, fromEvent } from 'rxjs';
import { mergeMap, take, map, takeUntil } from 'rxjs/operators';

/**
 * The mergeMap operator subscribes to any emisions that another observable
 * emits inside the general observable, so if there are ten emisions the mergeMap
 * subscribes to this ten emisions
 */

// const letters$ = of('a','b','c');

// letters$.pipe(
//     mergeMap(letter => interval(1000).pipe(
//         map(i => letter + i),
//         take(3)
//     ))
// ).subscribe({
//     next: val => console.log('next: ', val),
//     complete: () => console.log('complete!!')
// });

const mousedown$ = fromEvent(document, 'mousedown');
const mouseup$ = fromEvent(document, 'mouseup');
const interval$ = interval(1000);

mousedown$.pipe(
    mergeMap(() => interval$.pipe(
        map(i => i + 1),
        takeUntil(mouseup$)
    ))
).subscribe({
    next: val => console.log('next: ', val),
    complete: () => console.log('complete!!')
});