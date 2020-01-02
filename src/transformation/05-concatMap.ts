import { fromEvent, interval } from 'rxjs';
import { mergeMap, switchMap, concatMap, take } from 'rxjs/operators';

const click$ = fromEvent(document, 'click');
const interval$ = interval(1000).pipe(take(3));

/**
 * The concatMap operator emits all the observables in secuence and syncronously
 */
click$.pipe(
    // mergeMap( _ => interval$),
    // switchMap( _ => interval$),
    concatMap(_ => interval$)
).subscribe(console.log);
