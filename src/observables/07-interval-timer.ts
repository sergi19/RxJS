import { interval, timer } from 'rxjs';

const observer = {
    next: value => console.log('next: ', value),
    complete: () => {return 'Hola'}
}

// Para notificaciones
const today = new Date();
today.setSeconds(today.getSeconds() + 5);

const interval$ = interval(1000);
const timer$ = timer(today);
// const timer$ = timer(2000, 1000) => timer and intervale both;


console.log('Inicio');
timer$.subscribe(observer);
console.log('Fin');

