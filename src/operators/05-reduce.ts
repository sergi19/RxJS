import { interval } from 'rxjs';
import { reduce, take, tap } from 'rxjs/operators';

// const numbers = [1,2,3,4,5];
/* acc => accumulate, curr => currentValue */
// const total = () => numbers.reduce((acc, curr) => acc + curr, 5);
// console.log(numbers.reduce(total))

interval(1000).pipe(
    take(4),
    tap(console.log),
    reduce((acc, curr) => acc + curr)
    // reduce((acc, curr) => acc + curr, initialValue(number))
)
.subscribe({
    next: val => console.log('next:', val),
    complete: () => console.log('Complete!!')
});

