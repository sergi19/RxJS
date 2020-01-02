import { Observable, Observer, Subject } from 'rxjs';

const observer: Observer<any> = {
    next: value => console.log('next [next]: ', value),
    error: value => console.log('error [error]: hubo un error'),
    complete: () => console.info('Complete!!!')
}

const interval$ = new Observable<number>(subscriber => {
    const intervalID = setInterval(() => {
        subscriber.next(Math.random())
    }, 2000);

    return () => {
        clearInterval(intervalID);
        console.log('Intérvalo destruido');
        
    }
})

/**
 * 1. Casteo múltiple (se distribuye la misma info a todos los lugares donde estén suscritos)
 * 2. También es un observer
 * 3. Maneja next, error y complete
 */
const subject$ = new Subject();
const subscription = interval$.subscribe(subject$);

const subs1 = subject$.subscribe(observer);
const subs2 = subject$.subscribe(observer);

setTimeout(() => {
    subject$.next(10);
    subject$.complete();
    subscription.unsubscribe();
}, 3500);