import { interval, concat, of } from 'rxjs';
import { take, tap } from 'rxjs/operators';

const interval$ = interval(1000);

concat(
    interval$.pipe(take(3)),
    interval$.pipe(take(2)),
    of(1),
    [0,5,6]
).subscribe(console.log);

