import { range, fromEvent } from "rxjs";
import { map, pluck, mapTo } from "rxjs/operators";

// range(1,5).subscribe(val => console.log(val * 10));
// range(1,5).pipe(
//     map(val => String(val * 10))
//     map<number, string>(val => String(val * 10))
// ).subscribe(console.log);

const keyup$ = fromEvent<KeyboardEvent>(document, 'keyup');
    
const keyupCode$ = keyup$.pipe(
    map(code => code.code)
);

/* Simple keys */
// const keyupPluck$ = keyup$.pipe(
//     pluck('key')
// );

/* Object keys => target: { baseURI: 'uri' } */
const keyupPluck$ = keyup$.pipe(
    pluck('target', 'baseURI')
);

const keyupMapTo$ = keyup$.pipe(
    mapTo('key pressed')
)

keyup$.subscribe(console.log);
keyupCode$.subscribe( code => console.log('map', code));
keyupPluck$.subscribe( code => console.log('pluck', code));
keyupMapTo$.subscribe( code => console.log('mapTo', code));

