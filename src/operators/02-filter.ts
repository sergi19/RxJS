import { range, of, from, fromEvent } from "rxjs";
import { filter, map, mapTo } from "rxjs/operators";

range(1, 10).pipe(
    filter(number => number % 2 === 0 && number < 50)
).subscribe(console.log);

interface Characters {
    type: string;
    name: string;
}

const characters: Characters[] = [
    {type: 'hero', name: 'Batman'},
    {type: 'hero', name: 'Robin'},
    {type: 'villain', name: 'Joker'},
];

from(characters).pipe(
    filter(user => user.type === 'villain')
).subscribe(console.log)


fromEvent<KeyboardEvent>(document, 'keyup').pipe(
    map(event => event.code),
    filter(key => key === 'Enter')
).subscribe(console.log);

fromEvent<KeyboardEvent>(document, 'keyup').pipe(
    filter(key => key.code === 'Enter'),
    map(() => 'Es la tecla enter'),
).subscribe(console.log)
