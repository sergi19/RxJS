import { fromEvent, interval } from 'rxjs';
import { takeUntil, skip, tap } from 'rxjs/operators';

const button = document.createElement('button');
button.innerText = 'Stop';
document.querySelector('body').append(button);
const clickBtn$ = fromEvent(button, 'click').pipe(
    tap(() => console.log('Antes del skip')),
    skip(2),
    tap(() => console.log('Después del skip')),
);
const counter$ = interval(1000);
counter$.pipe(
    takeUntil(clickBtn$)
).subscribe({
    next: value => console.log('next: ', value),
    complete: () => console.log('Complete!!')
});