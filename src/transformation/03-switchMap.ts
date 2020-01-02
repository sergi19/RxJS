import { fromEvent } from 'rxjs';
import { pluck, switchMap, mergeMap } from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';

const body = document.querySelector('body');
const textInput = document.createElement('input');
body.append(textInput);

const input2$ = fromEvent<KeyboardEvent>(textInput, 'keyup');
const url = 'https://httpbin.org/delay/1?arg=';

/**
 * The problem here with the mergeMap is that mergeMap subscribe
 * all the times that the user writes a word in the input field
 */
// input2$.pipe(
//     pluck('target', 'value'),
//     mergeMap(text => ajax.getJSON(url + text))
// ).subscribe(console.log);

/**
 * The solution for the above problem is using the switchMap operator, which cancel
 * all the previous subscription and keep the last one
 */
input2$.pipe(
    pluck('target', 'value'),
    switchMap(text => ajax.getJSON(url + text))
).subscribe(console.log);