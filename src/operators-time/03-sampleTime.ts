import { fromEvent, interval } from 'rxjs';
import { sampleTime, map } from 'rxjs/operators';


const click$ = fromEvent<MouseEvent>(document, 'click');
// const obs$ = interval(600);

click$.pipe(
    sampleTime(5000),
    map(({x, y}) => ({x, y}))
).subscribe(console.log);

