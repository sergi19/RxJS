import { fromEvent, interval } from 'rxjs';
import { mergeMap, switchMap, concatMap, take, exhaustMap } from 'rxjs/operators';

const click$ = fromEvent(document, 'click');
const interval$ = interval(1000).pipe(take(3));

/**
 * The exhaustMap operator emits all the observables that be part of the
 * current subscription, so if in the middle of the first subscription the second
 * observable emits then its subscription will be ignored and will keep the first subscription.
 * If the second observable wants to be taken into account, then it should emitted after of the end of
 * the first subscription
 */
click$.pipe(
    // mergeMap( _ => interval$),
    // switchMap( _ => interval$),
    // concatMap(_ => interval$),
    exhaustMap(_ => interval$)
).subscribe(console.log);
