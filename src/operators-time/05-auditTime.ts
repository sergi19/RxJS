import { fromEvent, interval } from 'rxjs';
import { auditTime, tap, map } from 'rxjs/operators';


const obs$ = interval(1000);
const click$ = fromEvent<MouseEvent>(document, 'click');

click$.pipe(
    map(({ x }) => x),
    tap(value => console.log('tap: ', value)),
    auditTime(2000)
).subscribe(console.log);

