import { fromEvent, interval } from 'rxjs';
import { sample } from 'rxjs/operators';


const obs$ = interval(1000);
const click$ = fromEvent<MouseEvent>(document, 'click');

obs$.pipe(
    sample(click$)
).subscribe(console.log);

