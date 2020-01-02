import { Observable, Observer } from 'rxjs';

const observer: Observer<any> = {
    next: value => console.log('next [next]: ', value),
    error: value => console.log('error [error]: hubo un error'),
    complete: () => console.info('Complete!!!')
}

const interval$ = new Observable(subscriber => {
    // Create a count like 1, 2, 3, 4, 5,...
    let count = 0;
    const interval = setInterval(() => {
        count++;
        subscriber.next(count);
        console.log(count);
    }, 1000);

    setTimeout(() => {
        subscriber.complete();
    }, 2500);

    return () => {
        clearInterval(interval);
        console.log('Intérvalo completado!!');
    }
});

const subscription1 = interval$.subscribe(observer);
const subscription2 = interval$.subscribe(observer);
const subscription3 = interval$.subscribe(observer);

subscription1.add(subscription2).add(subscription3);

setTimeout(() => {
    subscription1.unsubscribe();
    // subscription2.unsubscribe();
    // subscription3.unsubscribe();
    console.log('Completed!!');
}, 6000);
