import { fromEvent } from 'rxjs';

/**
 * Eventos del DOM
 */
const src1$ = fromEvent<MouseEvent>(document, 'click');
const src2$ = fromEvent<KeyboardEvent>(document, 'keyup');

// src1$.subscribe(event => {
//     console.log(event);
// });

src1$.subscribe(({x, y}) => {
    console.log('X: ' + x, 'Y: ' + y);
});

src2$.subscribe(event => {
    console.log(event.key);
});