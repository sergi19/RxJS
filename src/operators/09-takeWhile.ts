import { fromEvent } from 'rxjs';
import { takeWhile } from 'rxjs/operators';


const click$ = fromEvent<MouseEvent>(document, 'click');

click$.pipe(
    /* This line only emit complete and don't emit the last value */
    // takeWhile(({x, y}) => y <= 150)

    /* This line emit both, the last value and complete, thanks to put inclusive as true */
    takeWhile(({x, y}) => y <= 150, true)
).subscribe({
    next: value => console.log('next: ', value),
    complete: () => console.log('complete')
})